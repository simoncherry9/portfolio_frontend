import { Component } from '@angular/core';
import { UserService } from '../../services/registar.service';
import { User } from 'src/app/interfaces/user';

import toastr from 'toastr';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent {
  username = '';
  password = '';
  email = '';
  isLoading = false; // Variable para controlar la carga

  constructor(private userService: UserService) { }

  register(): void {
    this.isLoading = true; // Iniciar la carga

    if (!this.validateEmail(this.email)) {
      toastr.error('Por favor, introduce un email válido');
      this.isLoading = false; // Finalizar la carga
      return;
    }

    const user: User = {
      username: this.username,
      password: this.password,
      email: this.email
    };

    this.userService.register(user).subscribe(
      (response: any) => {
        // Registro exitoso
        this.isLoading = false; // Finalizar la carga

        toastr.options = {
          closeButton: true,
          positionClass: 'toast-top-right',
          timeOut: 3000
        };

        toastr.success('Usuario registrado exitosamente');
      },
      (error: any) => {
        console.log('Error en el registro de usuario', error);
        this.isLoading = false; // Finalizar la carga

        toastr.options = {
          closeButton: true,
          positionClass: 'toast-top-right',
          timeOut: 3000
        };

        toastr.error('Error en el registro de usuario');
      }
    );
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
