import { CartController } from './cart.controller';
import { HttpModule, Module } from '@nestjs/common';
import { CartService } from 'src/shared/services/cart.service';

@Module({
  imports: [HttpModule],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
