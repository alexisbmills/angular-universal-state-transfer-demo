import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './view-model/users/users.component';
import { UserComponent } from './view-model/user/user.component';
import { HttpClient } from '@angular/common/http';
import { UserApiService } from './services/user-api.service';
import { USER_SERVICE } from './services/user-access';
import { UserResolver } from './services/content.resolver';

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
    {
      provide: USER_SERVICE,
      useFactory: (http: HttpClient) => new UserApiService(http),
      deps: [HttpClient]
    },
    UserResolver
  ],
})
export class UsersModule {
}
