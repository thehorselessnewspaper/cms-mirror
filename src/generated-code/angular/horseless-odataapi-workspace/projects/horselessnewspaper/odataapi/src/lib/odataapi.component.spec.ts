import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdataapiComponent } from './odataapi.component';

describe('OdataapiComponent', () => {
  let component: OdataapiComponent;
  let fixture: ComponentFixture<OdataapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdataapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdataapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
