import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginData } from 'src/app/interfaces/login';
import { Router } from '@angular/router';

import toastr from 'toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private loginService: LoginService, private router: Router) { }

  login(): void {
    const loginData: LoginData = {
      email: this.email,
      password: this.password
    };

    this.loginService.login(loginData).subscribe(
      (response: any) => {
        // Guardar el token en el almacenamiento local
        const token = response.token;
        localStorage.setItem('token', token);

        // Redirigir a la página principal o realizar otra acción
        this.router.navigate(['/perfil']);

        toastr.options = {
          closeButton: true,
          positionClass: 'toast-top-right',
          timeOut: 3000
        };

        toastr.success('Sesión iniciada');
      },
      (error) => {
        console.log('Error en el inicio de sesión', error);
      }
    );

  }
}
