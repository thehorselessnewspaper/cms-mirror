//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantIdentifierStrategyContainerService } from './tenantidentifierstrategycontainer.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const TenantIdentifierStrategyContainerServiceEntitySetConfig = {
  name: 'TenantIdentifierStrategyContainer',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.TenantIdentifierStrategyContainer',
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