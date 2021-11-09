import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './views/authentication/page404/page404.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthLayoutComponent } from './views/layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './views/layout/app-layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'advance-table',
        loadChildren: () =>
          import('./views/advance-table/advance-table.module').then(
            (m) => m.AdvanceTableModule
          )
      },
      {
        path: 'employee',
        loadChildren: () =>
          import('./views/employees/employee.module').then(
            (m) => m.EmployeeModule
          )
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./views/calendar/calendar.module').then((m) => m.CalendarsModule)
      },
      {
        path: 'task',
        loadChildren: () =>
          import('./views/task/task.module').then((m) => m.TaskModule)
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('./views/contacts/contacts.module').then((m) => m.ContactsModule)
      },
      {
        path: 'email',
        loadChildren: () =>
          import('./views/email/email.module').then((m) => m.EmailModule)
      },
      {
        path: 'apps',
        loadChildren: () =>
          import('./views/apps/apps.module').then((m) => m.AppsModule)
      },
      {
        path: 'widget',
        loadChildren: () =>
          import('./views/widget/widget.module').then((m) => m.WidgetModule)
      },
      {
        path: 'ui',
        loadChildren: () => import('./views/ui/ui.module').then((m) => m.UiModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.FormModule)
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./views/tables/tables.module').then((m) => m.TablesModule)
      },
      {
        path: 'media',
        loadChildren: () =>
          import('./views/media/media.module').then((m) => m.MediaModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'timeline',
        loadChildren: () =>
          import('./views/timeline/timeline.module').then((m) => m.TimelineModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'extra-pages',
        loadChildren: () =>
          import('./views/extra-pages/extra-pages.module').then(
            (m) => m.ExtraPagesModule
          )
      },
      {
        path: 'maps',
        loadChildren: () =>
          import('./views/maps/maps.module').then((m) => m.MapsModule)
      },
      {
        path: 'multilevel',
        loadChildren: () =>
          import('./views/multilevel/multilevel.module').then(
            (m) => m.MultilevelModule
          )
      },
      {
        path: 'role',
        loadChildren: () =>
          import('./views/role/role.module').then(
            (m) => m.RoleModule
          )
      }
    ]
  },
  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./views/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      )
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
