import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.userRepository.save(this.userRepository.create(data));

    const { password, ...userWithoutPassword } = createdUser;

    return userWithoutPassword;
  }

  async findAll() {
    return await this.userRepository.find()
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOneBy({
      id
    });

    if (!user) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOneBy({
      email
    })
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    const updateUser = await this.userRepository.merge(user, updateUserDto)

    return await this.userRepository.save(updateUser);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.userRepository.softDelete(id);
  }
}
