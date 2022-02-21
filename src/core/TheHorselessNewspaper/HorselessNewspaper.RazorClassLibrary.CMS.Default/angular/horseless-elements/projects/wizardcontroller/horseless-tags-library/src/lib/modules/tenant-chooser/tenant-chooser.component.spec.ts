import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantChooserComponent } from './tenant-chooser.component';

describe('TenantChooserComponent', () => {
  let component: TenantChooserComponent;
  let fixture: ComponentFixture<TenantChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
