import { IsLoginGuard } from './service/is-login.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./page/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [IsLoginGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./page/register/register.module').then(
        (m) => m.RegisterPageModule
      ),

    canActivate: [IsLoginGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./page/home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
