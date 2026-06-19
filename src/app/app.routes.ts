import { Routes } from '@angular/router';
import { INICIO_ROUTES } from './feactures/inicio/inicio.routes';
import { HISTORIA_ROUTES } from './feactures/historia/historia.routes';
import { FIESTA_ROUTES } from './feactures/fiesta/fiesta.routes';
import { ANIVERSARIO_ROUTES } from './feactures/aniversario/aniversario.routes';
import { PREMIOS_ROUTES } from './feactures/premios/premios.routes';
import { INSTALACIONES_ROUTES } from './feactures/instalaciones/instalaciones.routes';
import { RESENIAS_ROUTES } from './feactures/resenias/resenias.routes';

export const routes: Routes = [
    ...INICIO_ROUTES,
    ...HISTORIA_ROUTES,
    ...FIESTA_ROUTES,
    ...ANIVERSARIO_ROUTES,
    ...PREMIOS_ROUTES,
    ...INSTALACIONES_ROUTES,
    ...RESENIAS_ROUTES,
    {
        path:'**',
        redirectTo: 'Inicio'
    }
];
