import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository.abstract';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepositoryPrisma } from './repository/user.repository.prisma';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    {
      provide: UserRepository,
      useClass: UserRepositoryPrisma,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
