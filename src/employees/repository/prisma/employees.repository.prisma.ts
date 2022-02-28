import { Injectable } from '@nestjs/common';
import { Employee } from 'src/employees/entities/employee.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeRepository } from '../employees.repository.abstract';

@Injectable()
export class EmployeeRepositoryPrisma implements EmployeeRepository {
  constructor(private prisma: PrismaService) {}

  create(employee: Employee): Promise<Employee> {
    const { email, fullName } = employee;
    return this.prisma.employee.create({
      data: {
        email,
        fullName,
      },
    });
  }

  find(id: number): Promise<Employee> {
    return this.prisma.employee.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateEmployeeDto: Partial<Employee>): Promise<Employee> {
    return this.prisma.employee.update({
      where: {
        id,
      },
      data: {
        ...updateEmployeeDto,
      },
    });
  }
}
