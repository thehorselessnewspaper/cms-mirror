//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ResourceAction } from './resourceaction.complex';
//#endregion

export interface RolePermission {
  //#region ODataApiGen Properties
  resourceActions?: ResourceAction[];
  //#endregion
}