import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { 
        path: 'login', 
        component: LoginPageComponent,
    },
    {
        path: 'home',
        component: HomePageComponent,
        canActivate: [authGuard],
    },
    {
        path: '**',
        redirectTo: '/home',
    }
];
