import { InjectionToken } from '@angular/core';

export interface WebpAccess {
  // decode(webpData: Uint8Array): Promise<string>;
  decode(url: string): Promise<string>;
  // /**
  //  * Polyfill the webp format on the given <img> element
  //  */
  // polyfillImage(image: HTMLImageElement): Promise<void>;
}

export const WEBP_POLYFILL = new InjectionToken<WebpAccess>('WEBP_POLYFILL');
