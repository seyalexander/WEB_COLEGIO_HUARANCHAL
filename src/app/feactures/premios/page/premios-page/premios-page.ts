import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Navigator } from '../../../../shared/navigator/navigator/navigator';

export type TipoPremio =
  | 'academicos'
  | 'deportivos'
  | 'culturales';


@Component({
  selector: 'app-premios-page',
  imports: [NgClass, Navigator],
  templateUrl: './premios-page.html',
  styleUrl: './premios-page.css',
})
export class PremiosPage {
  premioSeleccionado: TipoPremio = 'academicos';

premiosTabs = [
  {
    id: 'academicos',
    icono: '📚',
    nombre: 'Académicos'
  },
  {
    id: 'deportivos',
    icono: '⚽',
    nombre: 'Deportivos'
  },
  {
    id: 'culturales',
    icono: '🎭',
    nombre: 'Culturales'
  }
];
}
