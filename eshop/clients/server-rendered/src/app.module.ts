import { CartModule } from './cart/cart.module';
import { HomepageModule } from './homepage/homepage.module';
import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { PageModule } from './page/page.module';

@Module({
  imports: [
    CartModule,
    HomepageModule,
    ProductModule,
    CategoryModule,
    PageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
