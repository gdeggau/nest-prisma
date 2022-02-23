import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { FindAppointmentDto } from './dto/find-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  create(createAppointmentDto: CreateAppointmentDto) {
    const { employeeId, description, endDate, startDate } =
      createAppointmentDto;

    return this.prisma.appointment.create({
      data: {
        employeeId,
        description,
        endDate: new Date(endDate),
        startDate: new Date(startDate),
      },
    });
  }

  async findAll(employeeId: number, query: FindAppointmentDto) {
    const { take, skip, search } = query;

    // const where = {
    //   employee: {
    //     contains: search,
    //   },
    // };

    const data = await this.prisma.appointment.findMany({
      where: {
        employeeId,
      },
      include: {
        employee: true,
      },
      take,
      skip,
      // where,
    });

    const count = await this.prisma.appointment.count({
      // where,
    });

    return {
      data,
      count,
    };
  }

  findOne(id: number) {
    return this.prisma.appointment.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    console.log(updateAppointmentDto);

    return this.prisma.appointment.update({
      data: updateAppointmentDto,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.appointment.delete({
      where: {
        id,
      },
    });
  }
}
