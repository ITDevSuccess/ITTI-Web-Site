import { Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'client'
    },
    {
        path: 'client',
        component: ClientComponent,
        children: [
            {
                path: 'home',
            }
        ]
    }
];
