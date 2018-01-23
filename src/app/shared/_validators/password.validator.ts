import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../_services/users/users.service';

export class PasswordCheckValidator {
    static passwordValidator(c: AbstractControl) {
        
            let passwordControl = c.get('password');
            let confirmControl = c.get('confirmPassword');

            if (passwordControl.pristine || confirmControl.pristine)
                return null;

            if (passwordControl.value === confirmControl.value)
                return null;

            c.get('confirmPassword').setErrors({ match: true });        
    }
}