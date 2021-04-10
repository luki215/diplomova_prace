import { PageController } from './page.controller';
import { HttpModule, Module } from '@nestjs/common';
import { SiteInfoService } from 'src/shared/services/site-info.service';
import { CartService } from 'src/shared/services/cart.service';
import { CategoriesService } from 'src/shared/services/categories.service';
import { PagesService } from 'src/shared/services/pages.service';

@Module({
  imports: [HttpModule],
  controllers: [PageController],
  providers: [PagesService, SiteInfoService, CartService, CategoriesService],
})
export class PageModule {}
