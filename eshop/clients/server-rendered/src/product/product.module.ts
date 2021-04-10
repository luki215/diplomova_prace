import { HomepageService } from '../shared/services/homepage.service';
import { HttpModule, Module } from '@nestjs/common';
import { SiteInfoService } from 'src/shared/services/site-info.service';
import { CartService } from 'src/shared/services/cart.service';
import { CategoriesService } from 'src/shared/services/categories.service';
import { ProductController } from './product.controller';
import { ProductsService } from 'src/shared/services/products.service';

@Module({
  imports: [HttpModule],
  controllers: [ProductController],
  providers: [ProductsService, SiteInfoService, CartService, CategoriesService],
})
export class ProductModule {}
