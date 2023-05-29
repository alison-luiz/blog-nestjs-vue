import { Type } from 'class-transformer';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IsCpfValid } from 'src/modules/users/decorators/is-cpf-valid/is-cpf-valid.decorator';
import { IsNotFutureDate } from 'src/modules/users/decorators/is-not-future-date/is-not-future-date.decorator';

export class CreateUserDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @Type(() => Date)
  @IsNotFutureDate()
  date_of_birth: Date;

  @IsString()
  @IsCpfValid()
  document: string;
}
