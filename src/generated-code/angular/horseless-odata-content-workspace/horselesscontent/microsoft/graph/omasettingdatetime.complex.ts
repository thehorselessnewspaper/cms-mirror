//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OmaSetting } from './omasetting.complex';
//#endregion

export interface OmaSettingDateTime extends OmaSetting {
  //#region ODataApiGen Properties
  value: Date;
  //#endregion
}