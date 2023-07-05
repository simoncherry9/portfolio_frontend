import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { PersonaComponent } from './components/persona/persona.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AuthGuard } from '../../src/app/services/auth.service';

const routes: Routes = [

  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'portfolio', component: PersonaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
