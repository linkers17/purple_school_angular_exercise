import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/_layout/layout.component';
import { LoginComponent } from './public/pages/login/login.component';
import { PrivateLayoutComponent } from './private/layout/layout.component';
import { HomeComponent } from './private/pages/home/home.component';
import { FavoritesComponent } from './private/pages/favorites/favorites.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'public',
    component: PublicLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: 'private',
    component: PrivateLayoutComponent,
    canActivate: [
      authGuard,
    ],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'public'
  },
];
