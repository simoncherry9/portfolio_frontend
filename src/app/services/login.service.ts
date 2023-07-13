// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData, ResetPasswordData } from '../interfaces/login';
import jwt_decode from 'jwt-decode';


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

  getUserNameFromToken(token: string): string {
    try {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.username;
    } catch (error) {
      console.log(token)
      console.error('Error al decodificar el token', error);
      return '';
    }
  }

  resetPassword(email: string): Observable<any> {
    const resetPasswordData: ResetPasswordData = { email };
    return this.http.post('https://portfolio-final-api.fly.dev/api/forgot-password', resetPasswordData);
  }

}

