import { Component } from '@angular/core';
import { ResetPasswordData } from '../../interfaces/login';
import { LoginService } from '../../services/login.service';
import toastr from 'toastr';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
  resetPasswordData: ResetPasswordData = { email: '' };
  isLoading = false;

  constructor(private loginService: LoginService) { }

  resetPassword() {
    // Validar el correo electrónico
    if (!this.isValidEmail(this.resetPasswordData.email)) {
      toastr.options = {
        closeButton: true,
        positionClass: 'toast-top-right',
        timeOut: 3000
      };

      toastr.error('Ingrese un correo electrónico válido');
      return; // Salir de la función si el correo electrónico no es válido
    }

    this.isLoading = true;
    this.loginService.resetPassword(this.resetPasswordData.email).subscribe(
      (response) => {
        toastr.options = {
          closeButton: true,
          positionClass: 'toast-top-right',
          timeOut: 3000
        };
        this.isLoading = false;
        toastr.success('Se ha enviado un email con los pasos para recuperar su contraseña');
      },
      (error) => {
        toastr.options = {
          closeButton: true,
          positionClass: 'toast-top-right',
          timeOut: 3000
        };

        if (error.status === 404) {
          toastr.error('No se encontró un usuario registrado con ese correo electrónico');
        } else {
          toastr.error('Error');
        }

        this.isLoading = false;
      }
    );
  }

  isValidEmail(email: string) {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
