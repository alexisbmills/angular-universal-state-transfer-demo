import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { USERS_FIXTURES } from './user.fixtures';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

export interface MockApiEndpoint {
  url: RegExp,
  json: any,
  method: string
}

const urls: MockApiEndpoint[] = [
  {
    url: /\/api\/users\/([a-z0-9\\-]+)$/i,
    json: USERS_FIXTURES[0],
    method: 'GET'
  },
  {
    url: /\/api\/users$/i,
    json: USERS_FIXTURES,
    method: 'GET'
  }
];

@Injectable()
export class UserApiMockService implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(() => {
        for (const element of urls) {
          if (request.url.match(element.url) && request.method === element.method) {
            console.log('Loaded from json : ' + request.url);
            return of(new HttpResponse({ status: 200, body: ((element.json) as any) }));
          }
        }
        console.log('Loaded from http call :' + request.url);
        return next.handle(request);

      }))
      // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}
