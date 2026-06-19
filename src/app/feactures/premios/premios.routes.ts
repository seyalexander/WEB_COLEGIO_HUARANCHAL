import { Routes } from '@angular/router';

export const PREMIOS_ROUTES: Routes = [
    {
        path:'Premios',
        loadComponent: () => import('../premios/page/premios-page/premios-page').then(m => m.PremiosPage)
    }
];
