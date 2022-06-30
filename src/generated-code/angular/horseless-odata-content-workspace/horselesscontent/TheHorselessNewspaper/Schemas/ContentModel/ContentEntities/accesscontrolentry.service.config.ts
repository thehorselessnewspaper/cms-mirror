//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntryService } from './accesscontrolentry.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const AccessControlEntryServiceEntitySetConfig = {
  name: 'AccessControlEntry',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry',
  service: AccessControlEntryService
} as EntitySetConfig;
//#endregion