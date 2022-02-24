import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from '../appointments/appointments.module';
import { PrismaService } from '../prisma/prisma.service';
import { EmployeesModule } from '../employees/employees.module';

@Module({
  imports: [AppointmentsModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
