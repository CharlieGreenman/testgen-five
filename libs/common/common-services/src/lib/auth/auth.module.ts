import { NgModule } from '@angular/core';
import { environment } from '@common/environment';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '@common/common-services'
import { authConfig } from '../auth/auth.config';
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
  imports: [
    HttpClientModule,
    AuthModule.forRoot({
      ...authConfig,
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.graphQLURI}`
          }
        ]
      }
    }),
  ],
  providers: [
    AuthService,
    AuthHttpInterceptor
  ],
})
export class AuthCoreModule {}