import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../app/services/perfil.service';
import { Router } from '@angular/router';
import { Comentarios } from '../interfaces/comentarios';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  username: string = '';
  comentarios: Comentarios[] = [];

  constructor(private perfilService: PerfilService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    const token: string | null = localStorage.getItem('token');
    this.username = this.perfilService.getUserNameFromToken(token ?? '');

    this.perfilService.getComentariosByUsername()
      .subscribe(
        comentarios => {
          this.comentarios = comentarios;
          console.log('Comentarios del usuario:', this.comentarios);
        },
        error => {
          console.error('Error al obtener los comentarios:', error);
        }
      );
  }
}
