import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './view-model/users/users.component';
import { UserComponent } from './view-model/user/user.component';
import { UserApiService } from './services/user-api.service';
import { UserResolver } from './services/user.resolver';
import { UserRepositoryService } from './services/user-repository.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    UserComponent
  ],
  providers: [
    UserApiService,
    UserRepositoryService,
    UserResolver
  ],
})
export class UsersModule {
}
