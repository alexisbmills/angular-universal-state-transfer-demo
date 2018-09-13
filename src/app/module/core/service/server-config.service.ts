import { Injectable } from '@angular/core';
import { API_URL_STATE_KEY, ConfigAccess } from './config-access';
import { TransferState } from '@angular/platform-browser';

@Injectable()
export class ServerConfigService implements ConfigAccess {

  /**
   * We could get this from environment variables on the server e.g. process.env['API_URL']
   */
  apiUrl = 'http://localhost:4000/api';

  constructor(private transferState: TransferState) {
    this.transferState.set<string>(API_URL_STATE_KEY, this.apiUrl);
  }
}
