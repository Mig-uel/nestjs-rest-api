type UserRole = 'ADMIN' | 'ENGINEER' | 'INTERN';

export class CreateUserDto {
  name: string;
  email: string;
  role: UserRole;
}
