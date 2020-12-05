import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

export interface AppContext {
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root(): AppContext {
    return { message: 'Hello world!' };
  }
}
