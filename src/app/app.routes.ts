import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./features/projects/projects-list/projects-list.component').then(m => m.ProjectsListComponent)
  },
  {
    path: 'proyectos/:slug',
    loadComponent: () => import('./features/projects/project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
