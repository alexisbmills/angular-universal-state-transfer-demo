import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { APP_INITIALIZER, Inject, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './module/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { CONFIG_SERVICE, ConfigAccess } from './module/core/service/config-access';
import { BrowserConfigService } from './module/core/service/browser-config.service';
import { environment } from '../environments/environment';
import { UserApiMockModule } from './module/user-api-mock/user-api-mock.module';

export function configFactory(configService: ConfigAccess) {
  return () => configService.init();
}

const mockImports = [];
if (!environment.production) {
  console.log('Non-production environment - mocking User API');
  mockImports.push(
    UserApiMockModule.forRoot()
  )
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    ...mockImports
  ],
  providers: [
    { provide: CONFIG_SERVICE, useClass: BrowserConfigService },
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [
        [new Inject(CONFIG_SERVICE)]
      ],
      multi: true,
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
