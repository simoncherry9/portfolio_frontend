import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string = '';

  constructor(private perfilService: PerfilService, private router: Router, private loginService: LoginService) { }

  logout(): void {
    // Eliminar el token del almacenamiento local
    localStorage.removeItem('token');

    // Redirigir al componente de inicio de sesión u otra página
    this.router.navigate(['/login']);
    console.log('Sesión cerrada');
  }

  menuVariable: boolean = false;
  menu_icon_variable: boolean = false;
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

  isCurrentRoute(route: string): boolean {
    return this.router.url === route;
  }

  ngOnInit(): void {
    const token: string | null = localStorage.getItem('token');
    this.username = this.perfilService.getUserNameFromToken(token ?? '');
  }

}
