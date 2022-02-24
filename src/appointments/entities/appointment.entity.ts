import { Prisma } from '@prisma/client';

export class Appointment implements Prisma.AppointmentUncheckedCreateInput {
  id: number;
  employeeId: number;
  startDate: Date;
  endDate: Date;
  description: string;
}
