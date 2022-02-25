//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChangeType } from './changetype.enum';
//#endregion

export interface CommsNotification {
  //#region ODataApiGen Properties
  changeType: ChangeType;
  resourceUrl: string;
  //#endregion
}