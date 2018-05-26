import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { InjectionToken } from '@angular/core';

export interface UserAccess {
  users(): Observable<User[]>;
}

export const USER_SERVICE = new InjectionToken<UserAccess>('USER_SERVICE');
