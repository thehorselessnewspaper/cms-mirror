//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NavigationMenuItemService } from './navigationmenuitem.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const NavigationMenuItemServiceEntitySetConfig = {
  name: 'NavigationMenuItem',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.NavigationMenuItem',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: NavigationMenuItemService
} as EntitySetConfig;
//#endregion