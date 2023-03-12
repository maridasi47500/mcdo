import { FormControl } from '@angular/forms';
export class EmailValidator {
  static validEmail(fc: FormControl){
    if(fc.value && fc.value.length() > 0){
      return ({validEmail: true});
    } else {
      return (null);
    }
  }
}
