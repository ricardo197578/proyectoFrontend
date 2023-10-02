import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private baseUrl = 'http://localhost:8080/api/personas'; // Reemplaza 'URL_DEL_BACKEND' con la URL de tu backend

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.baseUrl}`);
  }

  // Agrega métodos para crear, actualizar y eliminar personas según tus necesidades
}
