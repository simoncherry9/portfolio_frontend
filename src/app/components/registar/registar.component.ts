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
  isRegistered = false; // Variable para controlar el registro exitoso

  constructor(private userService: UserService) { }

  register(): void {
    if (this.checkFields()) {
      toastr.error('Por favor, completa todos los campos');
      return;
    }

    if (!this.validateEmail(this.email)) {
      toastr.error('Por favor, introduce un email válido');
      return;
    }

    this.isLoading = true; // Iniciar la carga

    const user: User = {
      username: this.username,
      password: this.password,
      email: this.email
    };

    this.userService.register(user).subscribe(
      (response: any) => {
        // Registro exitoso
        this.isLoading = false; // Finalizar la carga
        this.isRegistered = true; // Establecer registro exitoso

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

        if (error.status === 409) {
          toastr.error('El correo electrónico o el nombre de usuario ya están en uso');
        } else {
          toastr.error('Error en el registro de usuario');
        }
      }
    );
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  private checkFields(): boolean {
    return this.username.trim() === '' || this.password.trim() === '' || this.email.trim() === '';
  }
}
