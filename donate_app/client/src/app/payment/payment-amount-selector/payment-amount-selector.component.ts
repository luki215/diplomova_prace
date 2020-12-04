import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, Form, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { combineLatest} from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-payment-amount-selector',
  templateUrl: './payment-amount-selector.component.html',
  styleUrls: ['./payment-amount-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaymentAmountSelectorComponent),
      multi: true
    }
  ]
})
export class PaymentAmountSelectorComponent implements OnInit, ControlValueAccessor {
  public amountOptions: number[];
  public currVal: number;

  @Input() set amounts(amounts: number[]) {
    this.amountOptions = amounts;
    if (this.currVal) {
      if (amounts.includes(this.currVal)) {
        this.radioFC.patchValue(this.currVal);
      } else {
        this.customAmountFC.patchValue(this.currVal);
        this.radioFC.patchValue('custom');
      }
    }
  }

  public radioFC = new FormControl();
  public customAmountFC = new FormControl();
  public onChange;
  public onTouched
  constructor() { }

  public writeValue(val: number): void {
    if (val) {
      if (this.amountOptions.includes(val)) {
        this.radioFC.patchValue(val);
      } else {
        this.radioFC.patchValue('custom');
        this.customAmountFC.patchValue(val);
      }
    }
  }
  public registerOnChange(fn: any): void { this.onChange = fn; }
  public registerOnTouched(fn: any): void { this.onTouched = fn; }
  public setDisabledState?(isDisabled: boolean): void {}

  public ngOnInit(): void {
    combineLatest([this.customAmountFC.valueChanges.pipe(startWith(null)), this.radioFC.valueChanges])
    .subscribe(([customAmount, radioVal]) => {
      if (this.onChange) {
        if (!(radioVal === 'custom' && !customAmount)) {
          this.currVal = radioVal === 'custom' ? customAmount : radioVal;
          this.onChange(this.currVal);
          this.onTouched();
        }
      }
    });
  }

}
