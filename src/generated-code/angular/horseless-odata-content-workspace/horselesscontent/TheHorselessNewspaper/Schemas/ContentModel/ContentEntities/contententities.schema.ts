//#region ODataApiGen ODataImports
import {
  SchemaConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ACEPermissionScopeConfig } from './acepermissionscope.enum.config';
import { ACEPermissionConfig } from './acepermission.enum.config';
import { ACEPermissionTypeConfig } from './acepermissiontype.enum.config';
import { TenantIdentifierStrategyNameConfig } from './tenantidentifierstrategyname.enum.config';
import { AccessControlEntryEntityConfig } from './accesscontrolentry.entity.config';
import { ContentCollectionEntityConfig } from './contentcollection.entity.config';
import { FilesystemAssetEntityConfig } from './filesystemasset.entity.config';
import { HolonymEntityConfig } from './holonym.entity.config';
import { HorselessContentEntityConfig } from './horselesscontent.entity.config';
import { HorselessSessionEntityConfig } from './horselesssession.entity.config';
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
import { TenantIdentifierStrategyContainerEntityConfig } from './tenantidentifierstrategycontainer.entity.config';
import { TenantIdentifierStrategyEntityConfig } from './tenantidentifierstrategy.entity.config';
//#endregion

//#region ODataApiGen SchemaConfig
export const ContentEntitiesSchema = {
  namespace: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities',
  enums: [ACEPermissionScopeConfig,
    ACEPermissionConfig,
    ACEPermissionTypeConfig,
    TenantIdentifierStrategyNameConfig],
  entities: [AccessControlEntryEntityConfig,
    ContentCollectionEntityConfig,
    FilesystemAssetEntityConfig,
    HolonymEntityConfig,
    HorselessContentEntityConfig,
    HorselessSessionEntityConfig,
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
    TenantIdentifierStrategyContainerEntityConfig,
    TenantIdentifierStrategyEntityConfig],
  callables: [],
  containers: []
} as SchemaConfig;
//#endregion