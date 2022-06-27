//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TaxonomyService } from './taxonomy.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const TaxonomyServiceEntitySetConfig = {
  name: 'Taxonomy',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Taxonomy',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: TaxonomyService
} as EntitySetConfig;
//#endregion