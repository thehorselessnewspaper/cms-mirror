//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { HorselessViewService } from './horselessview.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const HorselessViewServiceEntitySetConfig = {
  name: 'HorselessView',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.HorselessView',
  service: HorselessViewService
} as EntitySetConfig;
//#endregion