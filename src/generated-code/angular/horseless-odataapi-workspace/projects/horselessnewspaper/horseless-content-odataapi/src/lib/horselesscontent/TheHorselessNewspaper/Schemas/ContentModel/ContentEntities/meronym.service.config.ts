//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MeronymService } from './meronym.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const MeronymServiceEntitySetConfig = {
  name: 'Meronym',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Meronym',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: MeronymService
} as EntitySetConfig;
//#endregion