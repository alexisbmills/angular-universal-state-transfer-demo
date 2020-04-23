import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CONFIG_SERVICE } from './module/core/service/config-access';
import { ServerConfigService } from './module/core/service/server-config.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule
],
  providers: [
    // Add universal-only providers here
    { provide: CONFIG_SERVICE, useClass: ServerConfigService }
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}
