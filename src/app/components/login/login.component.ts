// login.component.ts
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginData } from 'src/app/interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private loginService: LoginService) { }

  login(): void {
    const loginData: LoginData = {
      email: this.email,
      password: this.password
    };

    this.loginService.login(loginData).subscribe(
      (response) => {
        // Guardar el token en el almacenamiento local
        const token = response.token;
        this.loginService.saveToken(token);

        // Redirigir a la página principal o realizar otra acción
        console.log('Inicio de sesión exitoso');
      },
      (error) => {
        console.log('Error en el inicio de sesión', error);
      }
    );
  }
}
