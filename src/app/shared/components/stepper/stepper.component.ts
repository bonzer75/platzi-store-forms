import { Component } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StepperComponent),
      multi: true
    }
  ]
})
export class StepperComponent implements ControlValueAccessor {

  value = 0
  onChange = (a:any) => {}
  onTouched = () => {}
  isDisabled: | boolean = false

  add() {
    this.value++;
    this.onTouched
    this.onChange(this.value)
  }

  sub() {
    this,this.value--;
  }

  writeValue(value: number): void {
    if(value) {
      this.value = value
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(is: boolean): void {
    this.isDisabled = is
  }
}
