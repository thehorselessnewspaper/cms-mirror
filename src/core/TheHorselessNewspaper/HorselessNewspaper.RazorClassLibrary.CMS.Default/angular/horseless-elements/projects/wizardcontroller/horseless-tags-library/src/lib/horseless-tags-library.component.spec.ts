import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorselessTagsLibraryComponent } from './horseless-tags-library.component';

describe('HorselessTagsLibraryComponent', () => {
  let component: HorselessTagsLibraryComponent;
  let fixture: ComponentFixture<HorselessTagsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorselessTagsLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorselessTagsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
