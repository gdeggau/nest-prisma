import { Employee } from 'src/employees/entities/employee.entity';
import { Appointment } from './appointment.entity';

export class AppointmentWithEmployee extends Appointment {
  employee: Employee;
}
