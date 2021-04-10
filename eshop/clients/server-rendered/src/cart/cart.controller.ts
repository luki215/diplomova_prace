import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { CartService } from 'src/shared/services/cart.service';

@Controller('cart')
export class CartController {
  constructor(private cart: CartService) {}
  @Post('')
  async addItem(@Body() params: any, @Req() req, @Res() res) {
    await this.cart
      .add({ productSlug: params.product_id, count: +params.count })
      .toPromise();
    req.flash('success', 'Úspěšně přidáno do košíku');
    res.redirect('back');
  }
}
