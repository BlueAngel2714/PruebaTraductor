import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarCComponent } from './recuperar-c/recuperar-c.component';
import { TraductorComponent } from './traductor/traductor.component';
import { HistorialComponent } from './historial/historial.component';
import { TraductorImgComponent } from './traductor-img/traductor-img.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path:  'recuperar-c', component: RecuperarCComponent},
  { path:  'traductor', component: TraductorComponent},
  { path:  'historial', component: HistorialComponent},
  { path:  'traductor-img', component: TraductorImgComponent},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
