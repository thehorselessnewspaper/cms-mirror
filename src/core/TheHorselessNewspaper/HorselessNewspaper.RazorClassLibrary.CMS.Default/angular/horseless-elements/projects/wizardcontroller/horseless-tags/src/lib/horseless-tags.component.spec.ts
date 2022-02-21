import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorselessTagsComponent } from './horseless-tags.component';

describe('HorselessTagsComponent', () => {
  let component: HorselessTagsComponent;
  let fixture: ComponentFixture<HorselessTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorselessTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorselessTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
