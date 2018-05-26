import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID, Inject, APP_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { USER_SERVICE } from './services/user-access';
import { UserApiService } from './services/user-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    HttpClientModule,
  ],
  providers: [
    {
      provide: USER_SERVICE,
      useFactory: (http: HttpClient, platformId: Object, appId: string) => new UserApiService(http, platformId, appId),
      deps: [HttpClient, [new Inject(PLATFORM_ID)], [new Inject(APP_ID)]]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
