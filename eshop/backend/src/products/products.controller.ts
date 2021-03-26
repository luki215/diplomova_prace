import { Controller, Get, Query } from '@nestjs/common';
import { Paginated } from 'src/shared/interfaces/utils.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(
    @Query('category') category,
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 20,
  ) {
    return this.productsService.findAll({
      category,
      page: +page,
      pageSize: +pageSize,
    });
  }
}
