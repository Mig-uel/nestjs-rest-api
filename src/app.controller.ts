import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// controller decorator
@Controller()
export class AppController {
  // dependency injection
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
