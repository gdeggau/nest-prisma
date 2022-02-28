import { Injectable } from '@nestjs/common';
import { EntityNotFoundError } from 'src/errors/entity-not-found.error';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { EmployeeRepository } from './repository/employees.repository.abstract';

@Injectable()
export class EmployeesService {
  constructor(private employeeRepository: EmployeeRepository) {}

  create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this.employeeRepository.create(new Employee(createEmployeeDto));
  }

  // findAll(): Promise<Employee[]> {
  //   return this.prisma.employee.findMany();
  // }

  find(id: number): Promise<Employee> {
    return this.employeeRepository.find(id);
  }

  async update(
    id: number,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    const employee = await this.find(id);

    if (!employee) {
      throw new EntityNotFoundError();
    }

    return this.employeeRepository.update(id, updateEmployeeDto);
  }

  // remove(id: number) {
  //   return this.prisma.employee.delete({
  //     where: {
  //       id,
  //     },
  //   });
  // }
}
