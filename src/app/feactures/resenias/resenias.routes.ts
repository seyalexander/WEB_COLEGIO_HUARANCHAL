import { Routes } from '@angular/router';

export const RESENIAS_ROUTES: Routes = [
    {
        path:'Resenias',
        loadComponent: () => import('../resenias/page/resenias-page/resenias-page').then(m => m.ReseniasPage)
    }
];
