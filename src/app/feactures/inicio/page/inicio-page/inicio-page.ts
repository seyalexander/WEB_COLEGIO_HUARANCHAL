import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navigator } from '../../../../shared/navigator/navigator/navigator';

@Component({
  selector: 'app-inicio-page',
  imports: [RouterLink, Navigator],
  templateUrl: './inicio-page.html',
  styleUrl: './inicio-page.css',
})
export class InicioPage {

  galeria = [
  {
    id: 1,
    titulo: 'Fundación',
    anio: '1967',
    descripcion: 'Primeros años de la institución.',
    imagen: 'assets/colegio.jpeg'
  },
  {
    id: 2,
    titulo: 'Primera Promoción',
    anio: '1975',
    descripcion: 'Generación pionera.',
    imagen: 'assets/colegio_07.png'
  },
  {
    id: 3,
    titulo: 'Infraestructura',
    anio: '1998',
    descripcion: 'Ampliación del colegio.',
    imagen: 'assets/colegio_06.png'
  }
];

  fotoSeleccionada = this.galeria[0];

seleccionarFoto(foto: any) {
  this.fotoSeleccionada = foto;
}


}
