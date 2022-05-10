/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthModule, OidcSecurityService, LogLevel } from 'angular-auth-oidc-client';
import { TenantBladeComponent } from './TenantBlade.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('TenantBladeComponent', () => {
  let component: TenantBladeComponent;
  let fixture: ComponentFixture<TenantBladeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantBladeComponent ],
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
        })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
