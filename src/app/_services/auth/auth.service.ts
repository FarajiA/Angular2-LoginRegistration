import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../_models/user';
import { Token } from '../../_models/token';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
    token: Token;
    redirectUrl: string;
    user: User;

    constructor(private http: Http) {
        this.token = JSON.parse(sessionStorage.getItem('AuthInfo')) || new Token;
    }

    login(username: string, password: string): Observable<boolean> {
        let data = "grant_type=password&username=" + username + "&password=" + password + "&client_id=" + environment.clientID;
        return this.http.post(environment.apiUrl + 'oauth/token', data).map((response: Response) => {
            let auth = response.json();
            if (auth) {
                this.token.token = auth.access_token;
                this.token.expires = auth[".expires"];
                this.token.refreshToken = auth.refresh_token;
                this.token.username = auth.userName;
                this.token.authorized = true;
                localStorage.setItem('AuthInfo', JSON.stringify(this.token));
                return true;
            }
            else
                return false;
        });
    };

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('AuthInfo');
    };

}
