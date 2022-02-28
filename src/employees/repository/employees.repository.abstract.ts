import { Injectable } from '@nestjs/common';
import { Employee } from '../entities/employee.entity';

@Injectable()
export abstract class EmployeeRepository {
  abstract create(employee: Employee): Promise<Employee>;
  // remove(id: string): Promise<void>;
  abstract find(id: number): Promise<Employee>;
  // findAll(): Promise<Employee[]>;
  abstract update(
    id: number,
    updateEmployeeDto: Partial<Employee>,
  ): Promise<Employee>;
}
