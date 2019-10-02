import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncDependencyGuard } from './module/core/guard/async-dependency.guard';

const routes: Routes = [
  {
    path: 'messages',
    loadChildren: () => import('./module/messages/messages.module').then(m => m.MessagesModule),

  },
  {
    path: '',
    loadChildren: () => import('./module/users/users.module').then(m => m.UsersModule),
    canLoad: [AsyncDependencyGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { initialNavigation: 'enabled', }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
