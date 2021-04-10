import { SiteInfoService } from './shared/services/site-info.service';
import { HomepageModule } from './homepage/homepage.module';
import { Module } from '@nestjs/common';
import { HomepageService } from './shared/services/homepage.service';

@Module({
  imports: [HomepageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
