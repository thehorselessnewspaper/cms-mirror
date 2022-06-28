import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorselessHostingOdataapiComponent } from './horseless-hosting-odataapi.component';

describe('HorselessHostingOdataapiComponent', () => {
  let component: HorselessHostingOdataapiComponent;
  let fixture: ComponentFixture<HorselessHostingOdataapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorselessHostingOdataapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorselessHostingOdataapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
