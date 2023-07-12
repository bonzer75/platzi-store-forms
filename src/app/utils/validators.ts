import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);
    if (value > 10000) {
      return {price_invalid: true};
    }
    return null;
  }

  static isPassValid(control: AbstractControl) {
    const value = control.value.split('');
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    const hasNumbers = numbers.every(num => {
      return value.includes(num);
    });

    if(!hasNumbers) {
      return { invalid_password: true }
    }

    return null
  }

  static matchPasswords()

}
