import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';

@Injectable()
export abstract class UserRepository {
  abstract create(employee: User): Promise<User>;
  abstract findById(id: number): Promise<User>;
  abstract findByEmail(email: string): Promise<User>;
}
