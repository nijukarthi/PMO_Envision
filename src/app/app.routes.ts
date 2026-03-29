import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { ShellComponent } from './shell/shell.component';
import { DemandPlanComponent } from './demand-plan/demand-plan.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: ShellComponent,
    canActivate: [authGuard],
    children: [
      { path: '',             redirectTo: 'demand-plan', pathMatch: 'full' },
      { path: 'demand-plan',  component: DemandPlanComponent }
    ]
  },
  { path: '**', redirectTo: '/login' }
];
