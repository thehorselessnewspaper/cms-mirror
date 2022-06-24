//#region ODataApiGen ODataImports
import {
  SchemaConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantIdentifierStrategyNameConfig } from './tenantidentifierstrategyname.enum.config';
import { ACEPermissionScopeConfig } from './acepermissionscope.enum.config';
import { ACEPermissionConfig } from './acepermission.enum.config';
import { ACEPermissionTypeConfig } from './acepermissiontype.enum.config';
import { AccessControlEntryEntityConfig } from './accesscontrolentry.entity.config';
import { ContentCollectionEntityConfig } from './contentcollection.entity.config';
import { FilesystemAssetEntityConfig } from './filesystemasset.entity.config';
import { HolonymEntityConfig } from './holonym.entity.config';
import { HorselessContentEntityConfig } from './horselesscontent.entity.config';
import { HorselessSessionEntityConfig } from './horselesssession.entity.config';
import { HorselessViewEntityConfig } from './horselessview.entity.config';
import { JSONAssetEntityConfig } from './jsonasset.entity.config';
import { MeronymEntityConfig } from './meronym.entity.config';
import { MIMETypeEntityConfig } from './mimetype.entity.config';
import { NavigationMenuEntityConfig } from './navigationmenu.entity.config';
import { NavigationMenuItemEntityConfig } from './navigationmenuitem.entity.config';
import { NugetPackageEntityConfig } from './nugetpackage.entity.config';
import { PlaceholderEntityConfig } from './placeholder.entity.config';
import { PrincipalEntityConfig } from './principal.entity.config';
import { PublicationEntityConfig } from './publication.entity.config';
import { TaxonEntityConfig } from './taxon.entity.config';
import { TaxonomyEntityConfig } from './taxonomy.entity.config';
import { TenantEntityConfig } from './tenant.entity.config';
import { PrincipalClaimEntityConfig } from './principalclaim.entity.config';
import { PrincipalClaimContainerEntityConfig } from './principalclaimcontainer.entity.config';
import { TenantIdentifierStrategyContainerEntityConfig } from './tenantidentifierstrategycontainer.entity.config';
import { TenantIdentifierStrategyEntityConfig } from './tenantidentifierstrategy.entity.config';
import { ContentEntitiesContainer } from './contententities.container';
//#endregion

//#region ODataApiGen SchemaConfig
export const ContentEntitiesSchema = {
  namespace: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities',
  enums: [TenantIdentifierStrategyNameConfig,
    ACEPermissionScopeConfig,
    ACEPermissionConfig,
    ACEPermissionTypeConfig],
  entities: [AccessControlEntryEntityConfig,
    ContentCollectionEntityConfig,
    FilesystemAssetEntityConfig,
    HolonymEntityConfig,
    HorselessContentEntityConfig,
    HorselessSessionEntityConfig,
    HorselessViewEntityConfig,
    JSONAssetEntityConfig,
    MeronymEntityConfig,
    MIMETypeEntityConfig,
    NavigationMenuEntityConfig,
    NavigationMenuItemEntityConfig,
    NugetPackageEntityConfig,
    PlaceholderEntityConfig,
    PrincipalEntityConfig,
    PublicationEntityConfig,
    TaxonEntityConfig,
    TaxonomyEntityConfig,
    TenantEntityConfig,
    PrincipalClaimEntityConfig,
    PrincipalClaimContainerEntityConfig,
    TenantIdentifierStrategyContainerEntityConfig,
    TenantIdentifierStrategyEntityConfig],
  callables: [],
  containers: [ContentEntitiesContainer]
} as SchemaConfig;
//#endregion