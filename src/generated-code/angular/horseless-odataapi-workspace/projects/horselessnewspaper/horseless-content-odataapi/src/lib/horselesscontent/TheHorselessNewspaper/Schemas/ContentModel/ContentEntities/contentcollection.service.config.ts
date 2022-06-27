//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ContentCollectionService } from './contentcollection.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const ContentCollectionServiceEntitySetConfig = {
  name: 'ContentCollection',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.ContentCollection',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: ContentCollectionService
} as EntitySetConfig;
//#endregion