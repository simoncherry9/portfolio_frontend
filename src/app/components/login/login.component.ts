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
  isLoading = false; // Variable para controlar la carga

  constructor(private loginService: LoginService, private router: Router) { }

  login(): void {
    this.isLoading = true; // Iniciar la carga

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

        this.isLoading = false; // Finalizar la carga

        toastr.success('Sesión iniciada');
      },
      (error) => {
        console.log('Error en el inicio de sesión', error);
      }
    );

  }
}
