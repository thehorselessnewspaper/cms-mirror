import { Injectable } from '@angular/core';
import { ClientConfigurationService } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { ConfigurationEndpointService } from '../../../services/configuration-endpoint.service';

@Injectable({
  providedIn: 'any'
})

export class TenantChooserService {

constructor(private configEndpointService : ConfigurationEndpointService) { }

}
