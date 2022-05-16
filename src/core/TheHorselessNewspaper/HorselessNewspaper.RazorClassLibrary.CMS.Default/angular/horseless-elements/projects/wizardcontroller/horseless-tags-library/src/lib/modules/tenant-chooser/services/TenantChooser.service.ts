import { Injectable } from '@angular/core';
import { ClientConfigurationService, ContentEntitiesTenant, TenantRESTService } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { ConfigurationEndpointService } from '../../../services/configuration-endpoint.service';

@Injectable({
  providedIn: 'any'
})

export class TenantChooserService {
  tenants!: ContentEntitiesTenant[];

constructor(private clientConfigService : ConfigurationEndpointService, private tenantService: TenantRESTService) { }

public subscribeToConfiguration(){

  console.log("tenant chooser service is subscribing to client configuration");
  this.clientConfigService.clientConfiguration$
  .subscribe(
    currentClientConfig => {
      console.log(`tenant chooser has client config: rest api endpoint %s`, currentClientConfig.restEndpoint);
    }
  );

}

public loadTeants(tenantIdentifier: string, pageSize: number, pageNumber: number, pageCount: number) {
  console.log('about to get content entities tenants');
  this.tenantService
    .contentEntitiesTenantRESTGetByPageNumber(
      tenantIdentifier,
      pageSize,
      pageNumber,
      pageCount
    )
    .subscribe((tenantQueryResult) => {
      console.log('handling tenant request response');
      tenantQueryResult.forEach((f) => this.tenants.push(f));

      console.log('retreved %d tents', this.tenants.length);
    });
}
}
