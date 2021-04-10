import { CategoryController } from './category.controller';
import { HttpModule, Module } from '@nestjs/common';
import { SiteInfoService } from 'src/shared/services/site-info.service';
import { CartService } from 'src/shared/services/cart.service';
import { CategoriesService } from 'src/shared/services/categories.service';
import { ProductsService } from 'src/shared/services/products.service';

@Module({
  imports: [HttpModule],
  controllers: [CategoryController],
  providers: [SiteInfoService, CartService, CategoriesService, ProductsService],
})
export class CategoryModule {}
