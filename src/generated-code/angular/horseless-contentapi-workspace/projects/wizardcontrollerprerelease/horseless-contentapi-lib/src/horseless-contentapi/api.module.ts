import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HorselessConfiguration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { ClientConfigurationService } from './api/clientConfiguration.service';
import { ContentCollectionRESTService } from './api/contentCollectionREST.service';
import { FilesystemAssetRESTService } from './api/filesystemAssetREST.service';
import { HolonymRESTService } from './api/holonymREST.service';
import { HorselessContentRESTService } from './api/horselessContentREST.service';
import { HorselessSessionRESTService } from './api/horselessSessionREST.service';
import { JSONAssetRESTService } from './api/jSONAssetREST.service';
import { KeycloakAuthenticationService } from './api/keycloakAuthentication.service';
import { MeronymRESTService } from './api/meronymREST.service';
import { MimeTypeRESTService } from './api/mimeTypeREST.service';
import { NavigationMenuItemRESTService } from './api/navigationMenuItemREST.service';
import { NavigationMenuRESTService } from './api/navigationMenuREST.service';
import { TenantInfoRESTService } from './api/tenantInfoREST.service';
import { TenantRESTService } from './api/tenantREST.service';
import { TenantRegistrationService } from './api/tenantRegistration.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class HorselessApiModule {
    public static forRoot(configurationFactory: () => HorselessConfiguration): ModuleWithProviders<HorselessApiModule> {
        return {
            ngModule: HorselessApiModule,
            providers: [ { provide: HorselessConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: HorselessApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('HorselessApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
