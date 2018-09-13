import { InjectionToken } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';

export interface ConfigAccess {
  apiUrl: string;
}

export const CONFIG_SERVICE = new InjectionToken<ConfigAccess>('ConfigService');

export const API_URL_STATE_KEY = makeStateKey<string>('api-url');
