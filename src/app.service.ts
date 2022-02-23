import { Injectable } from '@nestjs/common';

type ApiHealth = {
  timestamp: Date;
};

@Injectable()
export class AppService {
  getApiHealth(): ApiHealth {
    return {
      timestamp: new Date(),
    };
  }
}
