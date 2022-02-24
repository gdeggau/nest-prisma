import { IsDateString, IsString } from 'class-validator';
import { Appointment } from '../entities/appointment.entity';

export class CreateAppointmentDto extends Appointment {
  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;

  @IsString()
  description: string;
}
