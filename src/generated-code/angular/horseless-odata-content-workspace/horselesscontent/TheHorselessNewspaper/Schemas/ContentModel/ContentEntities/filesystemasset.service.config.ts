//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { FilesystemAssetService } from './filesystemasset.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const FilesystemAssetServiceEntitySetConfig = {
  name: 'FilesystemAsset',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.FilesystemAsset',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: FilesystemAssetService
} as EntitySetConfig;
//#endregion