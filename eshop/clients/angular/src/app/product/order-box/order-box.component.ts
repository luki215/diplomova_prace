import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-order-box',
  templateUrl: './order-box.component.html',
  styleUrls: ['./order-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderBoxComponent implements OnInit {
  @Input() product: Product | null = null;

  constructor() {}

  ngOnInit(): void {}
}
