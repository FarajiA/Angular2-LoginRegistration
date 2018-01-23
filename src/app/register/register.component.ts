import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { UserService } from '../_services/users/users.service';
import { ValidateUsernameNotTaken } from '../shared/_validators/username.validator';
import { PasswordCheckValidator } from '../shared/_validators/password.validator';
import {Observable} from 'rxjs/Observable';
import { Register } from '../_models/user';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

function passwordMatcher(c: AbstractControl) {

    let passwordControl = c.get('password');
    let confirmControl = c.get('confirmPassword');

    if (passwordControl && confirmControl) {
        if (passwordControl.pristine || confirmControl.pristine)
            return null;

        if (passwordControl.value === confirmControl.value)
            return null;

        return { 'match': true };
    }
    else
        return null;

}

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    //@ViewChild('registerForm') registerForm: HTMLFormElement;
    registerForm: FormGroup;
    model: any = {};
    loading: boolean = false;
    constructor(private fb: FormBuilder, private authService: AuthService, private userService: UserService, private router: Router) { }

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
            username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9\._.-]+$')], [ValidateUsernameNotTaken.createValidator(this.userService)]],
            passwordGroup: this.fb.group({
                password: ['', [Validators.required, Validators.minLength(6)]],
                confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
            }, {
                validator: PasswordCheckValidator.passwordValidator
            })            
        });
    }

    register() {
        let register = new Register();
        register = this.registerForm.value;
        register.password = this.registerForm.value.passwordGroup.password;
        register.confirmPassword = this.registerForm.value.passwordGroup.confirmPassword;
        delete register['passwordGroup'];
        this.userService.create(register).subscribe(
            data => {
                this.authService.login(register.username, register.password).subscribe(
                    data => {
                        this.router.navigate(['/main', 'dashboard']);
                    }, error => {
                        this.loading = false;
                    });                
            }, error => {
                this.loading = false;
            });        
    }    
    
}
