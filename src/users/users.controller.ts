import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users or /users?role=value
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  // GET /users/:id
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findById(id);
  }

  // POST /users
  @Post()
  create(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  // PATCH /users/:id
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() userUpdate: UpdateUserDto,
  ) {
    return this.usersService.update(id, userUpdate);
  }

  // DELETE /users/:id
  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.delete(id);
  }
}
