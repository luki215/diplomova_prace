import { HomepageService } from '../shared/services/homepage.service';
import { HomepageController } from './homepage.controller';
import { HttpModule, Module } from '@nestjs/common';
import { SiteInfoService } from 'src/shared/services/site-info.service';
import { CartService } from 'src/shared/services/cart.service';
import { CategoriesService } from 'src/shared/services/categories.service';

@Module({
  imports: [HttpModule],
  controllers: [HomepageController],
  providers: [HomepageService, SiteInfoService, CartService, CategoriesService],
})
export class HomepageModule {}
