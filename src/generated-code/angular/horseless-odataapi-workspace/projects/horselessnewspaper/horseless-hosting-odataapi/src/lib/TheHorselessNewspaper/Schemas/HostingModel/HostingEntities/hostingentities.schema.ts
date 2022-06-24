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
import { KeyCloakConfigurationEntityConfig } from './keycloakconfiguration.entity.config';
import { NugetPackageEntityConfig } from './nugetpackage.entity.config';
import { PrincipalEntityConfig } from './principal.entity.config';
import { TenantIdentifierStrategyContainerEntityConfig } from './tenantidentifierstrategycontainer.entity.config';
import { TenantIdentifierStrategyEntityConfig } from './tenantidentifierstrategy.entity.config';
import { TenantEntityConfig } from './tenant.entity.config';
import { TenantInfoEntityConfig } from './tenantinfo.entity.config';
import { WebAPITenantInfoEntityConfig } from './webapitenantinfo.entity.config';
import { HostingEntitiesContainer } from './hostingentities.container';
//#endregion

//#region ODataApiGen SchemaConfig
export const HostingEntitiesSchema = {
  namespace: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities',
  enums: [ACEPermissionScopeConfig,
    ACEPermissionConfig,
    ACEPermissionTypeConfig,
    TenantIdentifierStrategyNameConfig],
  entities: [AccessControlEntryEntityConfig,
    KeyCloakConfigurationEntityConfig,
    NugetPackageEntityConfig,
    PrincipalEntityConfig,
    TenantIdentifierStrategyContainerEntityConfig,
    TenantIdentifierStrategyEntityConfig,
    TenantEntityConfig,
    TenantInfoEntityConfig,
    WebAPITenantInfoEntityConfig],
  callables: [],
  containers: [HostingEntitiesContainer]
} as SchemaConfig;
//#endregion