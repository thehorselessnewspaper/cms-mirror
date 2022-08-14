/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthModule, OidcSecurityService, LogLevel } from 'angular-auth-oidc-client';
import { LoginComponent } from './Login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports : [
        RouterTestingModule,
        MatExpansionModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
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
      providers: [OidcSecurityService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
