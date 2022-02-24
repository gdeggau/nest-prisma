import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { FindAppointmentDto } from './dto/find-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AppointmentWithEmployee } from './entities/appointment-with-employee.entity';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  create(
    employeeId: number,
    createAppointmentDto: CreateAppointmentDto,
  ): Promise<Appointment> {
    const { description, endDate, startDate } = createAppointmentDto;
    return this.prisma.appointment.create({
      data: {
        employee: {
          connect: {
            id: employeeId,
          },
        },
        description,
        endDate,
        startDate,
      },
    });
  }

  findAll(
    employeeId: number,
    query: FindAppointmentDto,
  ): Promise<AppointmentWithEmployee[]> {
    const { take, skip } = query;

    return this.prisma.appointment.findMany({
      where: {
        employeeId,
      },
      include: {
        employee: true,
      },
      take,
      skip,
    });
  }

  findOne(employeeId: number, id: number): Promise<AppointmentWithEmployee> {
    return this.prisma.appointment.findFirst({
      where: {
        id,
        employeeId,
      },
      include: {
        employee: true,
      },
    });
  }

  update(
    id: number,
    updateAppointmentDto: UpdateAppointmentDto,
  ): Promise<Appointment> {
    return this.prisma.appointment.update({
      data: updateAppointmentDto,
      where: {
        id,
      },
    });
  }

  remove(id: number): Promise<Appointment> {
    return this.prisma.appointment.delete({
      where: {
        id,
      },
    });
  }
}
