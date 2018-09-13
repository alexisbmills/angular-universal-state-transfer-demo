import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { User } from './user';
import { UserRepositoryService } from './user-repository.service';

@Injectable()
export class UserResolver implements Resolve<User | undefined> {

  constructor(private userRepository: UserRepositoryService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    const urlPart = route.url.join('');
    return this.userRepository.user(urlPart);
  }
}
