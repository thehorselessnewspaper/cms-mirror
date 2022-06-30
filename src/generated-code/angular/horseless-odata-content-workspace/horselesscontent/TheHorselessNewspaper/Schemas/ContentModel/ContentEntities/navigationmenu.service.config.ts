//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { NavigationMenuService } from './navigationmenu.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const NavigationMenuServiceEntitySetConfig = {
  name: 'NavigationMenu',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.NavigationMenu',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: NavigationMenuService
} as EntitySetConfig;
//#endregion