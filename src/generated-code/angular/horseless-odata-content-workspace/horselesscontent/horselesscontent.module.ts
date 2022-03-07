//#region ODataApiGen ODataImports
import {
  NgModule
} from '@angular/core';//#endregion

//#region ODataApiGen Imports
import { ContainerService } from './Default/container.service';
import { AccessControlEntryService } from './Default/accesscontrolentry.service';
import { ContentCollectionService } from './Default/contentcollection.service';
import { FilesystemAssetService } from './Default/filesystemasset.service';
import { HolonymService } from './Default/holonym.service';
import { HorselessContentService } from './Default/horselesscontent.service';
import { HorselessSessionService } from './Default/horselesssession.service';
import { JSONAssetService } from './Default/jsonasset.service';
import { MeronymService } from './Default/meronym.service';
import { MIMETypeService } from './Default/mimetype.service';
import { NavigationMenuService } from './Default/navigationmenu.service';
import { NavigationMenuItemService } from './Default/navigationmenuitem.service';
import { NugetPackageService } from './Default/nugetpackage.service';
import { PlaceholderService } from './Default/placeholder.service';
import { PrincipalService } from './Default/principal.service';
import { PublicationService } from './Default/publication.service';
import { TaxonService } from './Default/taxon.service';
import { TaxonomyService } from './Default/taxonomy.service';
import { TenantService } from './Default/tenant.service';
import { TenantIdentifierStrategyContainerService } from './Default/tenantidentifierstrategycontainer.service';
import { TenantIdentifierStrategyService } from './Default/tenantidentifierstrategy.service';
//#endregion

@NgModule({
  providers: [
//#region ODataApiGen Providers
    ContainerService,
    AccessControlEntryService,
    ContentCollectionService,
    FilesystemAssetService,
    HolonymService,
    HorselessContentService,
    HorselessSessionService,
    JSONAssetService,
    MeronymService,
    MIMETypeService,
    NavigationMenuService,
    NavigationMenuItemService,
    NugetPackageService,
    PlaceholderService,
    PrincipalService,
    PublicationService,
    TaxonService,
    TaxonomyService,
    TenantService,
    TenantIdentifierStrategyContainerService,
    TenantIdentifierStrategyService//#endregion
  ]
})
export class HorselessContentModule { }