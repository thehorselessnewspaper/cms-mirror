//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { HorselessContentService } from './horselesscontent.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const HorselessContentServiceEntitySetConfig = {
  name: 'HorselessContent',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.HorselessContent',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: HorselessContentService
} as EntitySetConfig;
//#endregion