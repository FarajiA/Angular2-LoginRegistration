import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
    { path: 'login', component: LoginComponent, data: { state: 'login' }},
    { path: 'register', component: RegisterComponent, data: { state: 'register' }},
    { path: 'forgot', component: ForgotComponent, data: { state: 'forgot' }},
    {
        path: 'main',
        canActivate: [AuthGuard],
        loadChildren: 'app/main/main.module#MainModule'
    },
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: '**', redirectTo: 'main' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
