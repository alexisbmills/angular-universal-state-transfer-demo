import { Injectable } from '@angular/core';
import { API_URL_STATE_KEY, ConfigAccess } from './config-access';
import { TransferState } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

export interface BrowserConfig {
  apiUrl: string;
}

@Injectable()
export class BrowserConfigService implements ConfigAccess {

  private _apiUrl = '';

  constructor(private transferState: TransferState, private httpClient: HttpClient) {
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  init(): Promise<string> {
    this._apiUrl = this.transferState.get<string>(API_URL_STATE_KEY, '');
    if (this._apiUrl) {
      console.log(`getting API URL from State Transfer ${this._apiUrl}`);

      return Promise.resolve(this._apiUrl);
    }

    return this.httpClient
      .get('/assets/config.json')
      .pipe(
        map((config: BrowserConfig): string => config.apiUrl),
        tap((url: string) => {
          this._apiUrl = url;
          console.log(`getting API URL from JSON ${url}`)
        })
      )
      .toPromise();
  }
}
