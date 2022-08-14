/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfigurationEndpointService } from './configuration-endpoint.service';

describe('Service: ConfigurationEndpoint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigurationEndpointService]
    });
  });

  it('should ...', inject([ConfigurationEndpointService], (service: ConfigurationEndpointService) => {
    expect(service).toBeTruthy();
  }));
});
