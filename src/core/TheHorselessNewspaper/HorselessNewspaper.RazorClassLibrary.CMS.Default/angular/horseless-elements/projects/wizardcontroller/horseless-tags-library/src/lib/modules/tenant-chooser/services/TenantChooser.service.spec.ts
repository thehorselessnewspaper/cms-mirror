/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TenantChooserService } from './TenantChooser.service';

describe('Service: TenantChooser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TenantChooserService]
    });
  });

  it('should ...', inject([TenantChooserService], (service: TenantChooserService) => {
    expect(service).toBeTruthy();
  }));
});
