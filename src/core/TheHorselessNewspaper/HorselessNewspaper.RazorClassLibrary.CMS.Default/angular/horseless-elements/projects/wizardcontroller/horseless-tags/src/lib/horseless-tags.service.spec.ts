import { TestBed } from '@angular/core/testing';

import { HorselessTagsService } from './horseless-tags.service';

describe('HorselessTagsService', () => {
  let service: HorselessTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorselessTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
