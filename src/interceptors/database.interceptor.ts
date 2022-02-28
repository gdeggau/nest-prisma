import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DatabaseError } from 'src/errors/DatabaseError';
import { handleDatabaseErrors, isPrismaError } from 'src/utils';

@Injectable()
export class DatabaseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (isPrismaError(error)) {
          error = handleDatabaseErrors(error);
        }

        if (error instanceof DatabaseError) {
          throw new BadRequestException(error.message);
        }

        throw error;
      }),
    );
  }
}
