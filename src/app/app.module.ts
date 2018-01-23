import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './_services/auth/auth.interceptor';

import { Shared_Module } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth/auth.service';
import { UserService } from './_services/users/users.service';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ForgotComponent
    ],
    imports: [
        AppRoutingModule,
        Shared_Module
    ],
    providers: [
        AuthGuard,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
