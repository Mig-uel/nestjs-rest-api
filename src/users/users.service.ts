import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import type { CreateUserDto } from './dto/create-user.dto';
import type { UpdateUserDto } from './dto/update-user.dto';

type UserRole = 'ADMIN' | 'ENGINEER' | 'INTERN';
export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: randomUUID(),
      name: 'Alice Smith',
      email: 'alice@example.com',
      role: 'ENGINEER',
    },
    {
      id: randomUUID(),
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'ENGINEER',
    },
    {
      id: randomUUID(),
      name: 'Charlie Brown',
      email: 'charlie@example.com',
      role: 'ENGINEER',
    },
    {
      id: randomUUID(),
      name: 'Diana Prince',
      email: 'diana@example.com',
      role: 'ENGINEER',
    },
    {
      id: randomUUID(),
      name: 'Ethan Hunt',
      email: 'ethan@example.com',
      role: 'ENGINEER',
    },
  ];

  /**
   * Get all users, optionally by role.
   * @param role Filter by role
   * @returns User[]
   */
  findAll(role?: UserRole) {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  /**
   * Get user by ID.
   * @param id User ID
   * @returns User or undefined
   */
  findById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  /**
   * Add a new user.
   * @param user User data (no id)
   * @returns Created user
   */
  create(user: CreateUserDto) {
    const newUser: User = {
      ...user,
      id: randomUUID(),
    };
    this.users.push(newUser);
    return newUser;
  }

  /**
   * Update user by ID.
   * @param id User ID
   * @param updatedUser Partial user data
   * @returns Updated user or {}
   */
  update(id: string, updatedUser: UpdateUserDto) {
    const existingUser = this.users.find((user) => user.id === id);

    if (!existingUser) return {};

    existingUser.email = updatedUser.email || existingUser.email;
    existingUser.name = updatedUser.name || existingUser.name;
    existingUser.role = updatedUser.role || existingUser.role;

    return existingUser;
  }

  /**
   * Remove user by ID.
   * @param id User ID
   * @returns Removed user or {}
   */
  delete(id: string) {
    const removedUser = this.findById(id);
    if (!removedUser) return {};
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
