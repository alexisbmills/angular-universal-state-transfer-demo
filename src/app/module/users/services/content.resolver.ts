import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { USER_SERVICE, UserAccess } from './user-access';
import { User } from './user';

@Injectable()
export class UserResolver implements Resolve<User | undefined> {
  constructor(@Inject(USER_SERVICE) private userService: UserAccess) {}

  resolve(route: ActivatedRouteSnapshot) {
    const urlPart = route.url.join('');
    console.log(`URL param ${urlPart}`);
    return this.userService.user(urlPart);
  }
}