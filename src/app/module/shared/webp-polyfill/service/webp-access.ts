import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PolyfillDocumentOptions } from 'webp-hero';

export interface WebpAccess {
  decode(url: string): Observable<string>;
}

export const WEBP_POLYFILL = new InjectionToken<WebpAccess>('WEBP_POLYFILL');


/**
 * shouldshouldApplyPolyfill
 *  - option to only apply polyfill
 *  - example: () => /msie\s|trident\/|edge\//i.test(window.navigator.userAgent)
 */
export interface WebpPolyfillOptions {
  shouldApplyPolyfill: () => boolean;
}

export const DEFAULT_WEBP_OPTIONS: WebpPolyfillOptions = {
  shouldApplyPolyfill: () => true
};

export const WEBP_POLYFILL_OPTIONS = new InjectionToken<WebpPolyfillOptions>('WEBP_POLYFILL_OPTIONS');

export interface WebpExternalAccess {
  /**
   * Decode raw webp data into a png data url
   */
  decode(webpData: Uint8Array): Promise<string>;
  /**
   * Polyfill the webp format on the given <img> element
   */
  polyfillImage(image: HTMLImageElement): Promise<void>;
  /**
   * Polyfill webp format on the entire web page
   */
  polyfillDocument({ document }?: PolyfillDocumentOptions): Promise<void>;
}

export const WEBP_POLYFILL_EXTERNAL = new InjectionToken<WebpExternalAccess>('WEBP_POLYFILL_EXTERNAL');


