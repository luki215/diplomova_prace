import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SiteInfoModule } from './site-info/site-info.module';

@Module({
  imports: [SiteInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
