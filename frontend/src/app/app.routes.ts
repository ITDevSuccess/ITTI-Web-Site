import { Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { HomeComponent } from './pages/client/pages/home/home.component';
import { FormationComponent } from './pages/client/pages/formation/formation.component';
import { DetailsComponent } from './pages/client/pages/formation/details.component';
import { ListsComponent } from './pages/client/pages/formation/lists.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'client/home',
    pathMatch: 'full',
  },
  {
    path: 'client',
    component: ClientComponent,
    children: [
      
      {
        path: 'formation',
        component: FormationComponent,
        data: { title: 'Formations' },
        children: [
          {
            path: '',
            component: ListsComponent,
            data: { title: 'Liste des Formations' },
          },
          {
            path: 'details/:uid',
            component: DetailsComponent,
            data: { title: 'Détails de la Formation' },
          },
        ],
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Accueil' },
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  // Route pour toutes les autres URL non définies
  {
    path: '**',
    redirectTo: 'client/home',
  },
];
