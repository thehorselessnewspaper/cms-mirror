//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { JSONAssetService } from './jsonasset.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const JSONAssetServiceEntitySetConfig = {
  name: 'JSONAsset',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.JSONAsset',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: JSONAssetService
} as EntitySetConfig;
//#endregion