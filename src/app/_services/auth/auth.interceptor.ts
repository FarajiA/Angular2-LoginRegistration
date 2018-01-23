import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private authService: AuthService;
    constructor(private inj: Injector) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.authService = this.inj.get(AuthService);
        let changedReq = req;
        if (this.authService.token.token)
            changedReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${this.authService.token.token}`) });

        return next.handle(changedReq);
    }
}