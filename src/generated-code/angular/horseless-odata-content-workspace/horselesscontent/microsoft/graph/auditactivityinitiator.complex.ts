//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UserIdentity } from './useridentity.complex';
import { AppIdentity } from './appidentity.complex';
//#endregion

export interface AuditActivityInitiator {
  //#region ODataApiGen Properties
  user?: UserIdentity;
  app?: AppIdentity;
  //#endregion
}