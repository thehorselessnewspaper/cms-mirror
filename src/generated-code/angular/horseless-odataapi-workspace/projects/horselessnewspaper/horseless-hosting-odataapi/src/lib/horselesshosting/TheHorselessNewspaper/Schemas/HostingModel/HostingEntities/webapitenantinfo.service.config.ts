//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WebAPITenantInfoService } from './webapitenantinfo.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const WebAPITenantInfoServiceEntitySetConfig = {
  name: 'WebAPITenantInfo',
  entityType: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.WebAPITenantInfo',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: WebAPITenantInfoService
} as EntitySetConfig;
//#endregion