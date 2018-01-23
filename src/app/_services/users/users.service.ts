import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User, Register } from '../../_models/user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    
    apiURL: string = environment.apiUrl + 'api/accounts/';

    private _user: User;
    constructor(private httpClient: HttpClient, private http: Http) { }
    get User(): User {
        return this._user;
    }

    set User(value: User) {
        this._user = value;
    }  

    checkUsername(username: string): Observable<any> {
        let msg = { "username": username };
        return this.http.post(this.apiURL + 'user/checkusername', msg)
            .map(res => { return res.json(); });
    }

    create(user: Register) {  
        return this.http.post(this.apiURL + 'register', user)
            .map(res => { return res.json(); });
    }
    userIdentity(): Observable<any> {
        return this.httpClient.get(this.apiURL + 'user');
    };
    
    update() {

    }

    delete() {

    }
}
