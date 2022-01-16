import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { ContentCollectionService } from './api/contentCollection.service';
import { FilesystemAssetService } from './api/filesystemAsset.service';
import { HolonymService } from './api/holonym.service';
import { HorselessContentService } from './api/horselessContent.service';
import { HorselessSessionService } from './api/horselessSession.service';
import { JSONAssetService } from './api/jSONAsset.service';
import { MeronymService } from './api/meronym.service';
import { MimeTypeService } from './api/mimeType.service';
import { NavigationMenuService } from './api/navigationMenu.service';
import { NavigationMenuItemService } from './api/navigationMenuItem.service';
import { TenantService } from './api/tenant.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
