import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (this.authService.token.authorized)
            return true;

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }

}
