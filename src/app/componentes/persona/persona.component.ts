import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonaService } from '../../persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  personas: Persona[]=[];

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(personas => {
      this.personas = personas;
    });
  }
}
