import { Injectable, Pipe } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../_services/users/users.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

export class ValidateUsernameNotTaken {
    static createValidator(userService: UserService) {
        return (c: FormControl) => {
            const promise = new Promise<any>(
                (resolve, reject) => {
                    if (c.value) {
                        return userService.checkUsername(c.value).subscribe(res => {
                            return res ? resolve(null) : resolve({ 'usernameTaken': true });
                    });
            }
            else
                return resolve(null);
            });
            return promise;
        };
    }    
}