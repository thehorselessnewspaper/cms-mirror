//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { HorselessSessionService } from './horselesssession.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const HorselessSessionServiceEntitySetConfig = {
  name: 'HorselessSession',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.HorselessSession',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: HorselessSessionService
} as EntitySetConfig;
//#endregion