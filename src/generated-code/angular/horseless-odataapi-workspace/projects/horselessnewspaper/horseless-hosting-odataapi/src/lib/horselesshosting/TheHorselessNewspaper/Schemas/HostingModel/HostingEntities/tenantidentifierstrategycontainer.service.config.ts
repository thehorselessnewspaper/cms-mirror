//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantIdentifierStrategyContainerService } from './tenantidentifierstrategycontainer.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const TenantIdentifierStrategyContainerServiceEntitySetConfig = {
  name: 'TenantIdentifierStrategyContainer',
  entityType: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantIdentifierStrategyContainer',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: TenantIdentifierStrategyContainerService
} as EntitySetConfig;
//#endregion