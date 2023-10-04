import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './componentes/persona/persona.component';

const routes: Routes = [
  { path: 'personas', component: PersonaComponent },
  // Agrega otras rutas según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
