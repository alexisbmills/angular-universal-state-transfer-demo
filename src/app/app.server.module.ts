import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CONFIG_SERVICE } from './module/core/service/config-access';
import { ServerConfigService } from './module/core/service/server-config.service';
import { WEBP_POLYFILL } from './module/shared/webp-polyfill/service/webp-access';
import { ServerWebpMachineService } from './module/shared/webp-polyfill/service/server-webp-machine.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  providers: [
    // Add universal-only providers here
    { provide: CONFIG_SERVICE, useClass: ServerConfigService },
    { provide: WEBP_POLYFILL, useClass: ServerWebpMachineService }
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}
