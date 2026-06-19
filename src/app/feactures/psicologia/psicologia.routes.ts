import { Routes } from '@angular/router';

export const PSICOLOGIA_ROUTES: Routes = [
    {
        path:'Psicologia',
        loadComponent: () => import('../psicologia/page/psicologia-page/psicologia-page').then(m => m.PsicologiaPage)
    }
];
