import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonaComponent } from './components/persona/persona.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AuthGuard } from '../../src/app/services/auth.service';
import { LoginService } from './services/login.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RegistarComponent } from './components/registar/registar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonaComponent,
    LoginComponent,
    PerfilComponent,
    SpinnerComponent,
    RegistarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
