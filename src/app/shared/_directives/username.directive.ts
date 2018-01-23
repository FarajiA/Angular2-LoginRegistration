import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';
// import { validateUsername } from '../_validators/username.validator';

@Directive({
    selector: '[usernameAvailable][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: UsernameValidatorDirective, multi: true }
    ]
})
export class UsernameValidatorDirective implements Validator {

    validator: ValidatorFn;

    constructor() {
       // this.validator = validateUsername();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }
}

