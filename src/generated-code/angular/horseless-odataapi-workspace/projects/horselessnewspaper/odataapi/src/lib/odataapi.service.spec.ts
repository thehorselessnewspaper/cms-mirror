import { TestBed } from '@angular/core/testing';

import { OdataapiService } from './odataapi.service';

describe('OdataapiService', () => {
  let service: OdataapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdataapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
