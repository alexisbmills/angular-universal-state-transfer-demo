import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncDependencyGuard } from './module/core/guard/async-dependency.guard';

const routes: Routes = [
  { path: 'messages', loadChildren: './module/messages/messages.module#MessagesModule' },
  {
    path: '',
    loadChildren: './module/users/users.module#UsersModule',
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
