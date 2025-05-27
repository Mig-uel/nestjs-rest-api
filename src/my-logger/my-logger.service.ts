import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  // implement logger functionality later

  log(message: unknown, context?: unknown): void {
    // const entry = `${context}\t${message}`;

    super.log(message, context);
  }

  error(message: unknown, stack?: unknown): void {
    // const entry = `${stack}\t${message}`;

    super.error(message, stack);
  }
}
