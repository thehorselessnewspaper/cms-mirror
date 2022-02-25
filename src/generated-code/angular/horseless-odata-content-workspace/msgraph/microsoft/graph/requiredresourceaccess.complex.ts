//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ResourceAccess } from './resourceaccess.complex';
//#endregion

export interface RequiredResourceAccess {
  //#region ODataApiGen Properties
  resourceAppId: string;
  resourceAccess: ResourceAccess[];
  //#endregion
}