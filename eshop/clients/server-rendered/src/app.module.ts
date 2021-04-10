import { SiteInfoService } from './shared/services/site-info.service';
import { HomepageModule } from './homepage/homepage.module';
import { Module } from '@nestjs/common';
import { HomepageService } from './shared/services/homepage.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [HomepageModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
