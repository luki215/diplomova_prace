import { HomepageModule } from './homepage/homepage.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SiteInfoModule } from './site-info/site-info.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HomepageModule,
    SiteInfoModule,
    CategoriesModule,
    ProductsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
