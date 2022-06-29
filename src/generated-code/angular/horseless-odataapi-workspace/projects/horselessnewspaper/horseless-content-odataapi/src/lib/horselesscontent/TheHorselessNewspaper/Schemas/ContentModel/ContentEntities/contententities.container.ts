//#region ODataApiGen ODataImports
import {
  EntityContainerConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntryServiceEntitySetConfig } from './accesscontrolentry.service.config';
import { ContentCollectionServiceEntitySetConfig } from './contentcollection.service.config';
import { FilesystemAssetServiceEntitySetConfig } from './filesystemasset.service.config';
import { HolonymServiceEntitySetConfig } from './holonym.service.config';
import { HorselessContentServiceEntitySetConfig } from './horselesscontent.service.config';
import { HorselessSessionServiceEntitySetConfig } from './horselesssession.service.config';
import { HorselessViewServiceEntitySetConfig } from './horselessview.service.config';
import { JSONAssetServiceEntitySetConfig } from './jsonasset.service.config';
import { MeronymServiceEntitySetConfig } from './meronym.service.config';
import { MIMETypeServiceEntitySetConfig } from './mimetype.service.config';
import { NavigationMenuServiceEntitySetConfig } from './navigationmenu.service.config';
import { NavigationMenuItemServiceEntitySetConfig } from './navigationmenuitem.service.config';
import { NugetPackageServiceEntitySetConfig } from './nugetpackage.service.config';
import { PlaceholderServiceEntitySetConfig } from './placeholder.service.config';
import { PrincipalServiceEntitySetConfig } from './principal.service.config';
import { PublicationServiceEntitySetConfig } from './publication.service.config';
import { TaxonServiceEntitySetConfig } from './taxon.service.config';
import { TaxonomyServiceEntitySetConfig } from './taxonomy.service.config';
import { TenantServiceEntitySetConfig } from './tenant.service.config';
import { PrincipalClaimServiceEntitySetConfig } from './principalclaim.service.config';
import { PrincipalClaimContainerServiceEntitySetConfig } from './principalclaimcontainer.service.config';
import { TenantIdentifierStrategyContainerServiceEntitySetConfig } from './tenantidentifierstrategycontainer.service.config';
import { TenantIdentifierStrategyServiceEntitySetConfig } from './tenantidentifierstrategy.service.config';
//#endregion

//#region ODataApiGen EntityContainerConfig
export const ContentEntitiesContainer = {
  name: 'ContentEntities',
  entitySets: [
    AccessControlEntryServiceEntitySetConfig,
    ContentCollectionServiceEntitySetConfig,
    FilesystemAssetServiceEntitySetConfig,
    HolonymServiceEntitySetConfig,
    HorselessContentServiceEntitySetConfig,
    HorselessSessionServiceEntitySetConfig,
    HorselessViewServiceEntitySetConfig,
    JSONAssetServiceEntitySetConfig,
    MeronymServiceEntitySetConfig,
    MIMETypeServiceEntitySetConfig,
    NavigationMenuServiceEntitySetConfig,
    NavigationMenuItemServiceEntitySetConfig,
    NugetPackageServiceEntitySetConfig,
    PlaceholderServiceEntitySetConfig,
    PrincipalServiceEntitySetConfig,
    PublicationServiceEntitySetConfig,
    TaxonServiceEntitySetConfig,
    TaxonomyServiceEntitySetConfig,
    TenantServiceEntitySetConfig,
    PrincipalClaimServiceEntitySetConfig,
    PrincipalClaimContainerServiceEntitySetConfig,
    TenantIdentifierStrategyContainerServiceEntitySetConfig,
    TenantIdentifierStrategyServiceEntitySetConfig
  ]
} as EntityContainerConfig;
//#endregion