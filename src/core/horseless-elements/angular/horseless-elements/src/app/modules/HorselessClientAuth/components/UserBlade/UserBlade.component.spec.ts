/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserBladeComponent } from './UserBlade.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserBladeComponent', () => {
  let component: UserBladeComponent;
  let fixture: ComponentFixture<UserBladeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBladeComponent ],
      imports: [
        RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
