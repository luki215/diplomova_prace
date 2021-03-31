import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get(':user')
  find(@Param('user') user) {
    return this.cartService.find(user);
  }

  @Post(':user/addToCart')
  addToCart(
    @Param('user') user,
    @Body('productSlug') productSlug: string,
    @Body('count') count: number,
  ) {
    this.cartService.add(user, productSlug, count);
  }
}
