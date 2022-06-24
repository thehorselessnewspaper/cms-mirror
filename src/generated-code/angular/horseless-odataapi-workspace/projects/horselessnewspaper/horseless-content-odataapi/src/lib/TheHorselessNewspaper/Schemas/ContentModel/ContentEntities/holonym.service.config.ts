//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { HolonymService } from './holonym.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const HolonymServiceEntitySetConfig = {
  name: 'Holonym',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Holonym',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: HolonymService
} as EntitySetConfig;
//#endregion