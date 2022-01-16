import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorselessContentapiLibComponent } from './horseless-contentapi-lib.component';

describe('HorselessContentapiLibComponent', () => {
  let component: HorselessContentapiLibComponent;
  let fixture: ComponentFixture<HorselessContentapiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorselessContentapiLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorselessContentapiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
