import { ModuleWithProviders, NgModule, Optional, Provider, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserApiMockService } from './service/user-api-mock.service';

const providers: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: UserApiMockService,
    multi: true
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserApiMockModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UserApiMockModule,
      providers
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
      parentModule: UserApiMockModule,
  ) {
    if (parentModule) {
      throw new Error('UserApiMockModule is already loaded. Import it in the AppModule only');
    }
  }
}
