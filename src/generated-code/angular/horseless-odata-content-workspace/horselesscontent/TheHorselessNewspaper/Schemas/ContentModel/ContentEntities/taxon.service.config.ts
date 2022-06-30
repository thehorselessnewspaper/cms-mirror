//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { TaxonService } from './taxon.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const TaxonServiceEntitySetConfig = {
  name: 'Taxon',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Taxon',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: TaxonService
} as EntitySetConfig;
//#endregion