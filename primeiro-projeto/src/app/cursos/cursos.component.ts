import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  cursos: string[];

  nomePortal: string;

  constructor(private cursosServices: CursosService) {
    this.nomePortal = 'http://loiane.training';

    //const cursosService = new CursosService();

    this.cursos = this.cursosServices.getCursos();

    
  }
}
