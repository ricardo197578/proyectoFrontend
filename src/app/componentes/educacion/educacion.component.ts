import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicio/educacion/educacion.service';
import { Educacion } from 'src/app/model/educacion.model';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones: Educacion[] = [];
  nuevaEducacion: Educacion = new Educacion(); // Utiliza un objeto Educacion para crear nuevos registros
  educacionSeleccionada: Educacion | null = null;

  constructor(private educacionService: EducacionService) {}

  ngOnInit(): void {
    this.cargarEducaciones();
  }

  cargarEducaciones(): void {
    this.educacionService.getPersonas().subscribe(educaciones => {
      this.educaciones = educaciones;
    });
  }

  crearEducacion(): void {
    this.educacionService.crearEducacion(this.nuevaEducacion).subscribe(educacion => {
      this.educaciones.push(educacion);
      this.nuevaEducacion = new Educacion(); // Limpiar el formulario después de crear
    });
  }

  actualizarEducacion(): void {
    if (this.educacionSeleccionada) {
      this.educacionService.actualizarEducacion(this.educacionSeleccionada.id, this.educacionSeleccionada)
        .subscribe(() => {
          // Puedes realizar alguna acción después de la actualización si es necesario
        });
    }
  }

  eliminarEducacion(id: number): void {
    this.educacionService.eliminarEducacion(id).subscribe(() => {
      this.educaciones = this.educaciones.filter(educacion => educacion.id !== id);
    });
  }

  seleccionarEducacion(educacion: Educacion): void {
    this.educacionSeleccionada = educacion;
  }
}
