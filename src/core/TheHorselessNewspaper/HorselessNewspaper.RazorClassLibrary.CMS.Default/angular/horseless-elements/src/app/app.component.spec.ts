import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthModule, OidcSecurityService, LogLevel } from 'angular-auth-oidc-client';
import { RouterTestingModule } from '@angular/router/testing';
import { MockHostingmodelInterceptor } from './interceptor/mock-hostingmodel.interceptor';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [OidcSecurityService,MockHostingmodelInterceptor ],
      declarations: [
        AppComponent
      ],
      imports : [
        RouterTestingModule,
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
        })],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'horseless-elements'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app.title).toEqual('horseless-elements');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('.content span')?.textContent).toContain('horseless-elements app is running!');
  });
});
