import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../app/services/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  username: string = '';

  constructor(private perfilService: PerfilService, private router: Router) { }

  logout(): void {
    // Eliminar el token del almacenamiento local
    localStorage.removeItem('token');

    // Redirigir al componente de inicio de sesión u otra página
    this.router.navigate(['/login']);
    console.log('Sesión cerrada');
  }

  ngOnInit(): void {
    const token: string | null = localStorage.getItem('token');
    this.username = this.perfilService.getUserNameFromToken(token ?? '');
  }
}
