import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '../entities/user.entity';
import { UserRepository } from './user.repository.abstract';

@Injectable()
export class UserRepositoryPrisma implements UserRepository {
  constructor(private prisma: PrismaService) {}

  findById(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  create(user: User): Promise<User> {
    const { email, fullName, password } = user;
    return this.prisma.user.create({
      data: {
        email,
        fullName,
        password,
      },
    });
  }
}
