import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { PersonaComponent } from './components/persona/persona.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AuthGuard } from '../../src/app/services/auth.service';
import { RegistarComponent } from './components/registar/registar.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [

  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'editar', component: EditarComponent, canActivate: [AuthGuard] },
  { path: 'portfolio', component: PersonaComponent },
  { path: 'registrarme', component: RegistarComponent },
  { path: 'recuperar', component: RecuperarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
