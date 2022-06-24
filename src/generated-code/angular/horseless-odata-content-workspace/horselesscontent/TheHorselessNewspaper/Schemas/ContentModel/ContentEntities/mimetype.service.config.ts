//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MIMETypeService } from './mimetype.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const MIMETypeServiceEntitySetConfig = {
  name: 'MIMEType',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.MIMEType',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: MIMETypeService
} as EntitySetConfig;
//#endregion