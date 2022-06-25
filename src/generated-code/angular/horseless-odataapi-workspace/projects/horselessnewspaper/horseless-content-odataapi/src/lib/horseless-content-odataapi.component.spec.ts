import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorselessContentOdataapiComponent } from './horseless-content-odataapi.component';

describe('HorselessContentOdataapiComponent', () => {
  let component: HorselessContentOdataapiComponent;
  let fixture: ComponentFixture<HorselessContentOdataapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorselessContentOdataapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorselessContentOdataapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
