import { Injectable } from '@angular/core';
import { WebpAccess } from './webp-access';
import { PolyfillDocumentOptions } from 'webp-hero';

@Injectable({
  providedIn: 'root'
})
export class ServerWebpMachineService implements WebpAccess{

  constructor() { }

  decode(url: string): Promise<string> {
      console.log(`ServerWebpMachineService.decode taking a questionable action :D`);
    return Promise.resolve(url);
  }
  // decode(webpData: Uint8Array): Promise<string> {
  //   console.log(`ServerWebpMachineService.decode taking a questionable action :D`);
  //   return Promise.resolve(webpData.toLocaleString());
  // }

  polyfillDocument(polyfillDocumentOptions?: PolyfillDocumentOptions): Promise<void> {
    console.log(`ServerWebpMachineService.polyfillDocument taking no action`);
    return Promise.resolve();
  }

  polyfillImage(image: HTMLImageElement): Promise<void> {
    console.log(`ServerWebpMachineService.polyfillImage taking no action`);
    return Promise.resolve();
  }
}
