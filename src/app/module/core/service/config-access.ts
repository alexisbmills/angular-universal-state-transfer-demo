import { InjectionToken } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';
import { Observable } from 'rxjs';

export interface ConfigAccess {
  apiUrl: Observable<string>;
  init(): Promise<string>;
}

export const CONFIG_SERVICE = new InjectionToken<ConfigAccess>('ConfigService');

export const API_URL_STATE_KEY = makeStateKey<string>('api-url');
