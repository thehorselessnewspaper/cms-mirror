//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantInfoService } from './tenantinfo.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const TenantInfoServiceEntitySetConfig = {
  name: 'TenantInfo',
  entityType: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantInfo',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: TenantInfoService
} as EntitySetConfig;
//#endregion