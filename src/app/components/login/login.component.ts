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
    if (!this.isEmailValid(this.email)) {
      toastr.error('Por favor, introduce un correo electrónico válido');
      return;
    }

    if (this.checkFields()) {
      toastr.error('Por favor, completa todos los campos');
      return;
    }

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
        this.isLoading = false; // Finalizar la carga

        toastr.options = {
          closeButton: true,
          positionClass: 'toast-top-right',
          timeOut: 3000
        };

        toastr.error('Usuario o contraseña incorrectos');
      }
    );
  }

  private isEmailValid(email: string): boolean {
    // Expresión regular para verificar el formato del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
  }

  private checkFields(): boolean {
    return this.email.trim() === '' || this.password.trim() === '';
  }
}
