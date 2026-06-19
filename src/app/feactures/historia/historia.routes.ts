import { Routes } from '@angular/router';

export const HISTORIA_ROUTES: Routes = [
    {
        path:'Historia',
        loadComponent: () => import('../historia/page/historia-page/historia-page').then(m => m.HistoriaPage)
    }
];
