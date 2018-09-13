import { Injectable } from '@angular/core';
import { API_URL_STATE_KEY, ConfigAccess } from './config-access';
import { TransferState } from '@angular/platform-browser';

@Injectable()
export class BrowserConfigService implements ConfigAccess {

  private _apiUrl = '';

  constructor(private transferState: TransferState) {
    this._apiUrl = this.transferState.get<string>(API_URL_STATE_KEY, '');
  }

  get apiUrl(): string {
    return this._apiUrl;
  }
}
