import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver } from './services/user.resolver';
import { UserComponent } from './view-model/user/user.component';
import { UsersComponent } from './view-model/users/users.component';
import { AsyncDependencyGuard } from '../core/guard/async-dependency.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    pathMatch: 'full',
    canActivate: [AsyncDependencyGuard],
  },
  {
    path: '**',
    component: UserComponent,
    canActivate: [AsyncDependencyGuard],
    resolve: {
      user: UserResolver,
    },
    data: {
      noInitMetaData: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
