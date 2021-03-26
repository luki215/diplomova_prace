import { Pipe, PipeTransform } from '@angular/core';
import { StockState } from '../interfaces/product.interface';

@Pipe({
  name: 'stockState'
})
export class StockStatePipe implements PipeTransform {

  transform(value: StockState | undefined): any {
    switch (value?.state) {
      case 'available': return "skladem";
      case 'available-soon': return "brzy skladem";
      case 'unavailable': return "nedostupné";
    }
  }
}
