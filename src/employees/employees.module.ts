import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeRepository } from './repository/employees.repository.abstract';
import { EmployeeRepositoryPrisma } from './repository/employees.repository.prisma';

@Module({
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
    PrismaService,
    {
      provide: EmployeeRepository,
      useClass: EmployeeRepositoryPrisma,
    },
  ],
})
export class EmployeesModule {}
