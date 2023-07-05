import { Component, OnInit } from '@angular/core';
import { Comentarios } from 'src/app/interfaces/comentarios';
import { ComentariosService } from 'src/app/services/comentarios.service';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  comentarios: Comentarios = {
    id: 0,
    titulo: '',
    comentario: '',
    username: '',
  };
  loading: boolean = false;
  listComentarios: Comentarios[] = [];
  miInformacion = {
    nombre: 'Simón Cherry',
    edad: 22,
    ocupacion: 'Desarrollador web Full-Stack Junior'
  };
  constructor(private _comentariosService: ComentariosService) { }
  ngOnInit() {
    this.getComentarios();
  }

  isLoading = true;

  getComentarios() {
    this._comentariosService.getComentarios().subscribe(data => {
      this.listComentarios = data;
      this.isLoading = false;
    });
  }
}