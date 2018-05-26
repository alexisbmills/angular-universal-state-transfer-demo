import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { UserAccess } from './user-access';

@Injectable()
export class UserApiService implements UserAccess {

  constructor(private http: HttpClient) {
  }

  users(): Observable<User[]> {
    // TODO: Transfer config of base URL
    return this.http.get('http://127.0.0.1:4000/api/users') as Observable<User[]>;
  }

}
