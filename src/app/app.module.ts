import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonaService } from './persona.service';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { BanerComponent } from './componentes/baner/baner/baner.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    EducacionComponent,
    BanerComponent,
        // Agrega aquí otros componentes si es necesario
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
    // Agrega aquí otros módulos de Angular si es necesario
  ],
  providers: [
    PersonaService
    // Agrega aquí otros servicios si es necesario
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

