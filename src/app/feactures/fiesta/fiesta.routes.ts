import { Routes } from '@angular/router';

export const FIESTA_ROUTES: Routes = [
    {
        path:'Fiesta',
        loadComponent: () => import('../fiesta/page/fiesta-page/fiesta-page').then(m => m.FiestaPage)
    }
];
