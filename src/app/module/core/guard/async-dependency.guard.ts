import { Inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { CONFIG_SERVICE, ConfigAccess } from '../service/config-access';
import { map, take, tap } from 'rxjs/operators';

@Injectable()
export class AsyncDependencyGuard implements CanActivate, CanLoad {

  constructor(@Inject(CONFIG_SERVICE) private config: ConfigAccess) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.config.apiUrl.pipe(
      map((apiUrl: string) => !!apiUrl),
      tap(() => console.log(`AsyncDependencyGuard --> canActivate ${next.url.join('/')}?`)),
    );
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.config.apiUrl.pipe(
      map((apiUrl: string) => !!apiUrl),
      tap(() => console.log(`AsyncDependencyGuard --> canLoad ${route.path}`)),
      take(1)
    );
  }
}
