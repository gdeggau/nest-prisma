import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { FindAppointmentDto } from './dto/find-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Controller('employees/:employeeId/appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  create(
    @Body() createAppointmentDto: CreateAppointmentDto,
    @Param('employeeId', ParseIntPipe) employeeId: number,
  ) {
    return this.appointmentsService.create(employeeId, {
      ...createAppointmentDto,
    });
  }

  @Get()
  findAll(
    @Query() query: FindAppointmentDto,
    @Param('employeeId', ParseIntPipe) employeeId: number,
  ) {
    return this.appointmentsService.findAll(employeeId, query);
  }

  @Get(':id')
  findOne(
    @Param('employeeId', ParseIntPipe) employeeId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.appointmentsService.findOne(employeeId, id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentsService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.appointmentsService.remove(id);
  }
}
