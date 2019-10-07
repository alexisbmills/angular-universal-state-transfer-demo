import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebpMachine } from "webp-hero"
import { WEBP_POLYFILL, WebpAccess } from './service/webp-access';
import { WebpBackgroundDirective } from './directive/webp-background.directive';
import { WebpMachineService } from './service/webp-machine.service';
import { WebpImageDirective } from './directive/webp-image.directive';


export function polyfillServiceFactory() {
  return new WebpMachineService(new WebpMachine());
}

@NgModule({
  declarations: [
    WebpBackgroundDirective,
    WebpImageDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WebpBackgroundDirective,
    WebpImageDirective
  ],
  providers: [
    { provide: WEBP_POLYFILL, useFactory: polyfillServiceFactory }
  ]
})
export class WebpPolyfillModule {
}
