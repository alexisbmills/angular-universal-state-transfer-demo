import { ModuleWithProviders, NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebpMachine } from "webp-hero"
import {
  DEFAULT_WEBP_OPTIONS,
  WEBP_POLYFILL,
  WEBP_POLYFILL_EXTERNAL, WEBP_POLYFILL_OPTIONS,
  WebpExternalAccess, WebpPolyfillOptions
} from './service/webp-access';
import { WebpBackgroundDirective } from './directive/webp-background.directive';
import { WebpMachineService } from './service/webp-machine.service';
import { WebpImageDirective } from './directive/webp-image.directive';

export function polyfillServiceFactory(options: WebpPolyfillOptions, externalWebp: WebpExternalAccess) {
  const webpMachineService = new WebpMachineService(options, externalWebp);
  webpMachineService.init();
  return webpMachineService;
}

export function externalPolyfillFactory() {
  return new WebpMachine();
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
  ]
})
export class WebpPolyfillModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WebpPolyfillModule,
      providers: [
        {
          provide: WEBP_POLYFILL_OPTIONS,
          useValue: DEFAULT_WEBP_OPTIONS
        },
        {
          provide: WEBP_POLYFILL,
          useFactory: polyfillServiceFactory,
          deps: [ [new Inject(WEBP_POLYFILL_OPTIONS)], [new Inject(WEBP_POLYFILL_EXTERNAL)]]
        },
        {
          provide: WEBP_POLYFILL_EXTERNAL,
          useFactory: externalPolyfillFactory
        }
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: WebpPolyfillModule
    };
  }
}
