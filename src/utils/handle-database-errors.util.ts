import { UniqueConstraintError } from 'src/errors/UniqueConstraintError';
import { DatabaseError } from 'src/errors/DatabaseError';
import { PrismaClientError } from 'src/errors/PrismaClientError';
import { PrismaErrors } from 'src/prisma/prisma.errors';

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErrors.UniqueConstraintFail:
      return new UniqueConstraintError(e);

    default:
      return new DatabaseError(e.message);
  }
};
