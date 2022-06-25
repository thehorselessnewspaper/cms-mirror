//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PrincipalService } from './principal.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const PrincipalServiceEntitySetConfig = {
  name: 'Principal',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: PrincipalService
} as EntitySetConfig;
//#endregion