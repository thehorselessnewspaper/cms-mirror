//#region ODataApiGen ODataImports
import {
  NgModule
} from '@angular/core';//#endregion

//#region ODataApiGen Imports
import { ContentEntitiesService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/contententities.service';
import { AccessControlEntryService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/accesscontrolentry.service';
import { ContentCollectionService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/contentcollection.service';
import { FilesystemAssetService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/filesystemasset.service';
import { HolonymService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/holonym.service';
import { HorselessContentService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/horselesscontent.service';
import { HorselessSessionService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/horselesssession.service';
import { HorselessViewService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/horselessview.service';
import { JSONAssetService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/jsonasset.service';
import { MeronymService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/meronym.service';
import { MIMETypeService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/mimetype.service';
import { NavigationMenuService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/navigationmenu.service';
import { NavigationMenuItemService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/navigationmenuitem.service';
import { NugetPackageService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/nugetpackage.service';
import { PlaceholderService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/placeholder.service';
import { PrincipalService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/principal.service';
import { PublicationService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/publication.service';
import { TaxonService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/taxon.service';
import { TaxonomyService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/taxonomy.service';
import { TenantService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/tenant.service';
import { PrincipalClaimService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/principalclaim.service';
import { PrincipalClaimContainerService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/principalclaimcontainer.service';
import { TenantIdentifierStrategyContainerService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/tenantidentifierstrategycontainer.service';
import { TenantIdentifierStrategyService } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/tenantidentifierstrategy.service';
//#endregion

@NgModule({
  providers: [
//#region ODataApiGen Providers
    ContentEntitiesService,
    AccessControlEntryService,
    ContentCollectionService,
    FilesystemAssetService,
    HolonymService,
    HorselessContentService,
    HorselessSessionService,
    HorselessViewService,
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
    PrincipalClaimService,
    PrincipalClaimContainerService,
    TenantIdentifierStrategyContainerService,
    TenantIdentifierStrategyService//#endregion
  ]
})
export class HorselessContentModule { }