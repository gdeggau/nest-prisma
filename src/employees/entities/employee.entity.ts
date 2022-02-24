import { Prisma } from '@prisma/client';

export class Employee implements Prisma.EmployeeUncheckedCreateInput {
  id: number;
  fullName: string;
  email: string;
}
