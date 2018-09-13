import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver } from './services/user.resolver';
import { UserComponent } from './view-model/user/user.component';
import { UsersComponent } from './view-model/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: UserComponent,
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
