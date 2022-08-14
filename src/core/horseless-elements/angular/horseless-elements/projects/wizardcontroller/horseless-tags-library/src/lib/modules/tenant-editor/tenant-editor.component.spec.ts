import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HorselessApiModule} from '@wizardcontrollerprerelease/horseless-contentapi-lib'
import { TenantEditorComponent } from './tenant-editor.component';

describe('TenantEditorComponent', () => {
  let component: TenantEditorComponent;
  let fixture: ComponentFixture<TenantEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantEditorComponent ],
      imports: [CommonModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
