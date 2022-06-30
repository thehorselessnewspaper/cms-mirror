//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantIdentifierStrategyService } from './tenantidentifierstrategy.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const TenantIdentifierStrategyServiceEntitySetConfig = {
  name: 'TenantIdentifierStrategy',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.TenantIdentifierStrategy',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: TenantIdentifierStrategyService
} as EntitySetConfig;
//#endregion