import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserApiService } from './user-api.service';
import { User } from './user';
import { UserAccess } from './user-access';

@Injectable()
export class UserRepositoryService implements UserAccess {

  constructor(private userService: UserApiService,
              @Inject(PLATFORM_ID) private platformId,
              private transferState: TransferState) { }

  users(): Observable<User[]> {
    const USERS_KEY = makeStateKey<User[]>('users');

    if (this.transferState.hasKey(USERS_KEY)) {
      console.log(`Getting state transfer key ${USERS_KEY}`);
      const users = this.transferState.get<User[]>(USERS_KEY, undefined);
      this.transferState.remove(USERS_KEY);
      return of(users);
    }

    return this.userService.users()
      .pipe(
        tap((user: User[]) => {
          if (isPlatformServer(this.platformId)) {
            console.log(`Setting state transfer key ${USERS_KEY}`);
            this.transferState.set(USERS_KEY, user);
          }
        })
      );
  }

  user(id: string): Observable<User> {
    const USER_KEY = makeStateKey<User>(`user-${id}`);

    if (this.transferState.hasKey(USER_KEY)) {
      console.log(`Getting state transfer key ${USER_KEY}`);
      const user = this.transferState.get<User>(USER_KEY, undefined);
      this.transferState.remove(USER_KEY);
      return of(user);
    }

    return this.userService.user(id)
      .pipe(
        tap((user: User) => {
          if (isPlatformServer(this.platformId)) {
            console.log(`Setting state transfer key ${USER_KEY}`);
            this.transferState.set(USER_KEY, user);
          }
        })
      );
  }
}
