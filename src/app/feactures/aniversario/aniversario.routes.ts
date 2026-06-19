import { Routes } from '@angular/router';

export const ANIVERSARIO_ROUTES: Routes = [
    {
        path:'Aniversario',
        loadComponent: () => import('../aniversario/page/aniversario-page/aniversario-page').then(m => m.AniversarioPage)
    }
];
