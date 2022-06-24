//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlaceholderService } from './placeholder.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const PlaceholderServiceEntitySetConfig = {
  name: 'Placeholder',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Placeholder',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: PlaceholderService
} as EntitySetConfig;
//#endregion