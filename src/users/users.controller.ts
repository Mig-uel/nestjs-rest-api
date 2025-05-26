import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  // GET /users or /users?role=value
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return { role: role || 'all' };
  }

  // GET /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  // POST /users
  @Post()
  create(@Body() user: Record<string, string>) {
    return user;
  }

  // PATCH /users/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: Record<string, string>) {
    return {
      id,
      ...userUpdate,
    };
  }

  // DELETE /users/:id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return id;
  }
}
