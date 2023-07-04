import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentarios } from '../interfaces/comentarios'
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class PerfilService {
    private apiUrl = 'https://portfolio-final-api.fly.dev/api';

    constructor(private http: HttpClient) { }

    getComentariosByUsername(): Observable<Comentarios[]> {
        const token = localStorage.getItem('token');
        const username = token ? this.getUserNameFromToken(token) : '';
        const url = `${this.apiUrl}/comentarios/username/${username}`;
        return this.http.get<Comentarios[]>(url);
    }

    getUserNameFromToken(token: string | null): string {
        if (token) {
            try {
                const decodedToken: any = jwt_decode(token);
                return decodedToken.username;
            } catch (error) {
                console.error('Error al decodificar el token:', error);
            }
        }
        return '';
    }

}

