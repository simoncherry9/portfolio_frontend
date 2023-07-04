import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      // El token existe en el almacenamiento local
      return true;
    } else {
      // El token no existe, redirecciona al componente de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }
  }
}
