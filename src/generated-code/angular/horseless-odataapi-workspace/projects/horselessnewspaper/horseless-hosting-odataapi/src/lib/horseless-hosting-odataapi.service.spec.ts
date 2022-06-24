import { TestBed } from '@angular/core/testing';

import { HorselessHostingOdataapiService } from './horseless-hosting-odataapi.service';

describe('HorselessHostingOdataapiService', () => {
  let service: HorselessHostingOdataapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorselessHostingOdataapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
