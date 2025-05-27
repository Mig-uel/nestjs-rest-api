import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

type UserRole = 'ADMIN' | 'ENGINEER' | 'INTERN';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['ADMIN', 'INTERN', 'ENGINEER'], {
    message: 'Valid role required',
  })
  role: UserRole;
}
