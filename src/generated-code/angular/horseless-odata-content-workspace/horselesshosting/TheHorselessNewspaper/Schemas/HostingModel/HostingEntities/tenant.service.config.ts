//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { TenantService } from './tenant.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const TenantServiceEntitySetConfig = {
  name: 'Tenant',
  entityType: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: TenantService
} as EntitySetConfig;
//#endregion