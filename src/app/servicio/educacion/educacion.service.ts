import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private baseUrl = 'http://localhost:8080/api/educacion/';

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.baseUrl}`);
  }

  crearEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.baseUrl}`, educacion);
  }

  actualizarEducacion(id: number, educacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(`${this.baseUrl}/${id}`, educacion);
  }

  eliminarEducacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

