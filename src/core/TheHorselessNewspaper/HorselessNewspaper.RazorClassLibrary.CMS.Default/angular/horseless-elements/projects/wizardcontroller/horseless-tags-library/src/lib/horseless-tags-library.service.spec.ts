import { TestBed } from '@angular/core/testing';

import { HorselessTagsLibraryService } from './horseless-tags-library.service';

describe('HorselessTagsLibraryService', () => {
  let service: HorselessTagsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HorselessTagsLibraryService]
    });
    service = TestBed.inject(HorselessTagsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
