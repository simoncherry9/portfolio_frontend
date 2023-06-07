import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  miInformacion = {
    nombre: 'Simón Cherry',
    edad: 22,
    ocupacion: 'Desarrollador web Full-Stack Junior'
  };
}
