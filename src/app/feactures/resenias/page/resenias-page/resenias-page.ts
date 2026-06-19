import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

export type TipoResenia =
  | 'estudiantes'
  | 'padres'
  | 'docentes'
  | 'egresados';


@Component({
  selector: 'app-resenias-page',
  imports: [NgClass],
  templateUrl: './resenias-page.html',
  styleUrl: './resenias-page.css',
})
export class ReseniasPage {
  reseniaSeleccionada: TipoResenia = 'estudiantes';

reseniasTabs = [
  {
    id: 'estudiantes',
    icono: '🎓',
    nombre: 'Estudiantes'
  },
  {
    id: 'padres',
    icono: '👨‍👩‍👧',
    nombre: 'Padres'
  },
  {
    id: 'docentes',
    icono: '👨‍🏫',
    nombre: 'Docentes'
  },
  {
    id: 'egresados',
    icono: '🏆',
    nombre: 'Egresados'
  }
];
}
