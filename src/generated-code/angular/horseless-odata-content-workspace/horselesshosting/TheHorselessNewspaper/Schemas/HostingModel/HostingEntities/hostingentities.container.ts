//#region ODataApiGen ODataImports
import {
  EntityContainerConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntryServiceEntitySetConfig } from './accesscontrolentry.service.config';
import { KeyCloakConfigurationServiceEntitySetConfig } from './keycloakconfiguration.service.config';
import { NugetPackageServiceEntitySetConfig } from './nugetpackage.service.config';
import { PrincipalServiceEntitySetConfig } from './principal.service.config';
import { TenantIdentifierStrategyContainerServiceEntitySetConfig } from './tenantidentifierstrategycontainer.service.config';
import { TenantIdentifierStrategyServiceEntitySetConfig } from './tenantidentifierstrategy.service.config';
import { TenantServiceEntitySetConfig } from './tenant.service.config';
import { TenantInfoServiceEntitySetConfig } from './tenantinfo.service.config';
import { WebAPITenantInfoServiceEntitySetConfig } from './webapitenantinfo.service.config';
//#endregion

//#region ODataApiGen EntityContainerConfig
export const HostingEntitiesContainer = {
  name: 'HostingEntities',
  entitySets: [
    AccessControlEntryServiceEntitySetConfig,
    KeyCloakConfigurationServiceEntitySetConfig,
    NugetPackageServiceEntitySetConfig,
    PrincipalServiceEntitySetConfig,
    TenantIdentifierStrategyContainerServiceEntitySetConfig,
    TenantIdentifierStrategyServiceEntitySetConfig,
    TenantServiceEntitySetConfig,
    TenantInfoServiceEntitySetConfig,
    WebAPITenantInfoServiceEntitySetConfig
  ]
} as EntityContainerConfig;
//#endregion