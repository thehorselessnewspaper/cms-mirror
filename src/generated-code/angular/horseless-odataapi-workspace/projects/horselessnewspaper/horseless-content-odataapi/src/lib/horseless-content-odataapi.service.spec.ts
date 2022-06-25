import { TestBed } from '@angular/core/testing';

import { HorselessContentOdataapiService } from './horseless-content-odataapi.service';

describe('HorselessContentOdataapiService', () => {
  let service: HorselessContentOdataapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorselessContentOdataapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
