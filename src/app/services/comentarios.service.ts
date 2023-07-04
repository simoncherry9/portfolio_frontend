import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentarios } from '../interfaces/comentarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'https://portfolio-final-api.fly.dev/';
    this.myApiUrl = 'api/comentarios';
  }

  Crear(comentarios: Comentarios): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, comentarios);
  }

  getComentarios(): Observable<Comentarios[]> {
    return this.http.get<Comentarios[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteComentario(id: number): Observable<any> {
    const url = `${this.myAppUrl}${this.myApiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
