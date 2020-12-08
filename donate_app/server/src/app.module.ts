import { HttpModule, HttpService, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventsService } from './events.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AppController],
  providers: [EventsService],
})
export class AppModule {}
