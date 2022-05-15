import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { TenantRESTService } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { OidcSecurityService } from 'angular-auth-oidc-client';

import { TenantChooserComponent } from './tenant-chooser.component';

describe('TenantChooserComponent', () => {
  let component: TenantChooserComponent;
  let fixture: ComponentFixture<TenantChooserComponent>;

  let tenantSvc: TenantRESTService;
  let oidcService : OidcSecurityService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatListModule,
        MatSliderModule,
        HttpClientTestingModule,
        CommonModule
      ],
        providers: [
          TenantRESTService,
          OidcSecurityService
        ],
        declarations: [ TenantChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantChooserComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', inject([TenantRESTService, OidcSecurityService], (tSvc: TenantRESTService, oidcSvc : OidcSecurityService) => {
    expect(component).toBeTruthy();
  })
)});
