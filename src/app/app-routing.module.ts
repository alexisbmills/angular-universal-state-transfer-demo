import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'messages', loadChildren: './module/messages/messages.module#MessagesModule' },
  { path: '', loadChildren: './module/users/users.module#UsersModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
