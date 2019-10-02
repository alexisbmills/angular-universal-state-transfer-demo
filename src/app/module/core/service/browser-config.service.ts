import { Injectable } from '@angular/core';
import { API_URL_STATE_KEY, ConfigAccess } from './config-access';
import { TransferState } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { filter, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

export interface BrowserConfig {
  apiUrl: string;
}

@Injectable()
export class BrowserConfigService implements ConfigAccess {

  private _apiUrl = new BehaviorSubject<string>('');

  constructor(private transferState: TransferState, private httpClient: HttpClient) {
  }

  get apiUrl(): Observable<string> {
    return this._apiUrl
      .asObservable()
      .pipe(
        filter((apiUrl: string) => !!apiUrl),
      );
  }

  init(): Promise<string> {
    const apiUrl = this.transferState.get<string>(API_URL_STATE_KEY, '');
    if (apiUrl) {
      console.log(`getting API URL from State Transfer ${apiUrl}`);
      this._apiUrl.next(apiUrl);
      return Promise.resolve(apiUrl);
    }

    return this.httpClient
      .get('/assets/config.json')
      .pipe(
        map((config: BrowserConfig): string => config.apiUrl),
        tap((url: string) => {
          this._apiUrl.next(url);
          console.log(`getting API URL from JSON ${url}`)
        })
      )
      .toPromise();
  }
}
