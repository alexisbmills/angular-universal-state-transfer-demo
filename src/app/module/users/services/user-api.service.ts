import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserAccess } from './user-access';
import { CONFIG_SERVICE, ConfigAccess } from '../../core/service/config-access';

@Injectable()
export class UserApiService implements UserAccess {

  private apiUrl: string;

  constructor(private http: HttpClient,
              @Inject(PLATFORM_ID) private platformId,
              @Inject(CONFIG_SERVICE) private config: ConfigAccess) {
    this.apiUrl = this.config.apiUrl;
  }

  users(): Observable<User[]> {
    console.log(`fetching users ${this.apiUrl}/users`);
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  user(id: string): Observable<User> {
    console.log(`fetching user ${this.apiUrl}/users/${id}`);
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }
}
