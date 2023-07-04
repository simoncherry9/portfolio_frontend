// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://portfolio-final-api.fly.dev/api/login';
  private tokenKey = 'jwtToken';

  constructor(private http: HttpClient) { }

  login(loginData: LoginData): Observable<any> {
    return this.http.post<any>(this.apiUrl, loginData);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
