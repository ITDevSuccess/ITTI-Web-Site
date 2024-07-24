import { Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { HomeComponent } from './pages/client/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full',
  },
  {
    path: 'client',
    component: ClientComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];
