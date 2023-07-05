// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'https://portfolio-final-api.fly.dev/api/users';

    constructor(private http: HttpClient) { }

    register(user: User): Observable<any> {
        return this.http.post(this.apiUrl, user);
    }
}
