/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HostingAccessControlEntryEditorComponent } from './hostingAccessControlEntry-editor.component';

describe('HostingAccessControlEntryEditorComponent', () => {
  let component: HostingAccessControlEntryEditorComponent;
  let fixture: ComponentFixture<HostingAccessControlEntryEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostingAccessControlEntryEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingAccessControlEntryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
