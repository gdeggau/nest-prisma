import { IsEmail, IsString } from 'class-validator';
import { Employee } from '../entities/employee.entity';
export class CreateEmployeeDto extends Employee {
  @IsEmail()
  email: string;

  @IsString()
  fullName: string;
}
