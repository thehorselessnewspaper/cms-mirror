import { TestBed } from '@angular/core/testing';

import { HorselessContentapiLibService } from './horseless-contentapi-lib.service';

describe('HorselessContentapiLibService', () => {
  let service: HorselessContentapiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorselessContentapiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
