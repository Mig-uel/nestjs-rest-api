import { Injectable } from '@nestjs/common';
import type { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(employee: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: employee,
    });
  }

  async findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role)
      return this.databaseService.employee.findMany({
        where: {
          role,
        },
      });

    return this.databaseService.employee.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.employee.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updatedEmployee: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: { id },
      data: updatedEmployee,
    });
  }

  async remove(id: string) {
    return this.databaseService.employee.delete({
      where: {
        id,
      },
    });
  }
}
