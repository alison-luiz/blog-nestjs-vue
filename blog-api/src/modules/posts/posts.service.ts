import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto, userId: string) {
    const post = this.postRepository.create({
      ...createPostDto,
      user: { id: userId },
    });

    return await this.postRepository.save(post);
  }

  findAll() {
    return this.postRepository.find({
      order: {
        created_at: 'DESC',
      },
    });
  }

  async findOne(id: string) {
    const post = await this.postRepository.findOneBy({
      id,
    });

    if (!post) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(id);

    const updatePost = await this.postRepository.merge(post, updatePostDto);

    return await this.postRepository.save(updatePost);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.postRepository.softDelete(id);
  }
}
