/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrincipalQueryService } from './principalQuery.service';

describe('Service: PrincipalQuery', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrincipalQueryService]
    });
  });

  it('should ...', inject([PrincipalQueryService], (service: PrincipalQueryService) => {
    expect(service).toBeTruthy();
  }));
});
