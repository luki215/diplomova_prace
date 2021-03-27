import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Product_Property } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-product-property',
  templateUrl: './product-property.component.html',
  styleUrls: ['./product-property.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPropertyComponent implements OnInit {
  @Input() property: Product_Property | null = null;
  constructor() {}

  ngOnInit(): void {}
}
