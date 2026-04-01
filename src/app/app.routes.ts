import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./demand-plan/demand-plan.component').then(m => m.DemandPlanComponent),
    canActivate: [authGuard]
  },
  {
    path: 'create-project',
    loadComponent: () => import('./create-project/create-project.component').then(m => m.CreateProjectComponent),
    canActivate: [authGuard]
  },
  {
    path: 'allocationApproval',
    loadComponent: () => import('./allocation-approval/allocation-approval').then(m => m.AllocationApproval),
    canActivate: [authGuard]
  },
  {
    path: 'componentAllocation',
    loadComponent: () => import('./component-allocation/component-allocation').then(m => m.ComponentAllocation),
    canActivate: [authGuard]
  },
  {
    path: 'WTGProduction',
    loadComponent: () => import('./wtgproduction/wtgproduction').then(m => m.WTGProduction),
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: 'login' }
];
