import { Injectable } from '@angular/core';
import { API_URL_STATE_KEY, ConfigAccess } from './config-access';
import { TransferState } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ServerConfigService implements ConfigAccess {

  private _apiUrl = new BehaviorSubject<string>('');

  constructor(private transferState: TransferState) {
  }

  get apiUrl(): Observable<string> {
    return this._apiUrl.asObservable();
  }

  init(): Promise<string> {
    /**
     * We could get this from environment variables on the server e.g. process.env['API_URL']
     */
    const url = 'http://localhost:4000/api';
    console.log(`setting API URL ${url}`);
    this.transferState.set<string>(API_URL_STATE_KEY, url);
    this._apiUrl.next(url);
    return Promise.resolve(url);
  }
}
