import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule, OidcSecurityService, LogLevel } from 'angular-auth-oidc-client';
import { MockHostingmodelInterceptor } from './mock-hostingmodel.interceptor';

describe('MockHostingmodelInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      MockHostingmodelInterceptor
    ],
    providers: [
      OidcSecurityService
      ],
      imports: [
        RouterTestingModule, HttpClientTestingModule,
        AuthModule.forRoot({
          config: {
            authority: 'https://awsdev.ataxlab.com:8443/realms/horseless-infrastructure',
            redirectUrl: window.location.origin + "/tenants" ,
            postLogoutRedirectUri: window.location.origin + "/index",
            clientId: 'horseless-prototype-public',
            scope: 'openid profile email offline_access',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            logLevel: LogLevel.Debug,
          }
        })
      ]
  }));

  it('should be created', () => {
    const interceptor: MockHostingmodelInterceptor = TestBed.inject(MockHostingmodelInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
function beforeEach(arg0: () => import("@angular/core/testing").TestBedStatic) {
 console.log("before each executing");
}

