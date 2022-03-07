//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PublicationService } from './publication.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const PublicationServiceEntitySetConfig = {
  name: 'Publication',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Publication',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: PublicationService
} as EntitySetConfig;
//#endregion