import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserAccess } from './user-access';
import { CONFIG_SERVICE, ConfigAccess } from '../../core/service/config-access';
import { switchMap, take, tap } from 'rxjs/operators';

@Injectable()
export class UserApiService implements UserAccess {

  constructor(private http: HttpClient,
              @Inject(PLATFORM_ID) private platformId,
              @Inject(CONFIG_SERVICE) private config: ConfigAccess) {
  }

  users(): Observable<User[]> {
    return this.config.apiUrl.pipe(
      tap((apiUrl: string) => console.log(`fetching users ${apiUrl}/users`)),
      switchMap((apiUrl: string) => this.http.get<User[]>(`${apiUrl}/users`)),
      take(1)
    );
  }

  user(id: string): Observable<User> {
    return this.config.apiUrl.pipe(
      tap((apiUrl: string) => console.log(`fetching user ${apiUrl}/users/${id}`)),
      switchMap((apiUrl: string) => this.http.get<User>(`${apiUrl}/users/${id}`)),
      take(1)
    );
  }
}
