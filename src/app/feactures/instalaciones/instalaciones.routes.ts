import { Routes } from '@angular/router';

export const INSTALACIONES_ROUTES: Routes = [
    {
        path:'Instalaciones',
        loadComponent: () => import('../instalaciones/page/instalaciones-page/instalaciones-page').then(m => m.InstalacionesPage)
    }
];
