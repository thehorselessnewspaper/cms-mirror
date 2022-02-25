//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ActionState } from './actionstate.enum';
//#endregion

export interface DeviceActionResult {
  //#region ODataApiGen Properties
  actionName?: string;
  actionState: ActionState;
  startDateTime: Date;
  lastUpdatedDateTime: Date;
  //#endregion
}