//#region ODataApiGen ODataImports
import {
  NgModule
} from '@angular/core';//#endregion

//#region ODataApiGen Imports
import { HostingEntitiesService } from './TheHorselessNewspaper/Schemas/HostingModel/HostingEntities/hostingentities.service';
import { AccessControlEntryService } from './TheHorselessNewspaper/Schemas/HostingModel/HostingEntities/accesscontrolentry.service';
import { KeyCloakConfigurationService } from './TheHorselessNewspaper/Schemas/HostingModel/HostingEntities/keycloakconfiguration.service';
import { NugetPackageService } from './TheHorselessNewspaper/Schemas/HostingModel/HostingEntities/nugetpackage.service';
import { PrincipalService } from './TheHorselessNewspaper/Schemas/HostingModel/HostingEntities/principal.service';
import { TenantIdentifierStrategyContainerService } from './TheHorselessNewspaper/Schemas/HostingModel/HostingEntities/tenantidentifierstrategycontainer.service';
import { TenantIdentifierStrategyService } from './TheHorselessNewspaper/Schemas/HostingModel/HostingEntities/tenantidentifierstrategy.service';
import { TenantService } from './TheHorselessNewspaper/Schemas/HostingModel/HostingEntities/tenant.service';
import { TenantInfoService } from './TheHorselessNewspaper/Schemas/HostingModel/HostingEntities/tenantinfo.service';
import { WebAPITenantInfoService } from './TheHorselessNewspaper/Schemas/HostingModel/HostingEntities/webapitenantinfo.service';
//#endregion

@NgModule({
  providers: [
//#region ODataApiGen Providers
    HostingEntitiesService,
    AccessControlEntryService,
    KeyCloakConfigurationService,
    NugetPackageService,
    PrincipalService,
    TenantIdentifierStrategyContainerService,
    TenantIdentifierStrategyService,
    TenantService,
    TenantInfoService,
    WebAPITenantInfoService//#endregion
  ]
})
export class HorselessHostingModule { }