//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntryService } from './accesscontrolentry.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const AccessControlEntryServiceEntitySetConfig = {
  name: 'AccessControlEntry',
  entityType: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.AccessControlEntry',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: AccessControlEntryService
} as EntitySetConfig;
//#endregion