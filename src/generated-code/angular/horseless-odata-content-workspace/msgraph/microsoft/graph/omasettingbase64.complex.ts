//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OmaSetting } from './omasetting.complex';
//#endregion

export interface OmaSettingBase64 extends OmaSetting {
  //#region ODataApiGen Properties
  fileName?: string;
  value: string;
  //#endregion
}