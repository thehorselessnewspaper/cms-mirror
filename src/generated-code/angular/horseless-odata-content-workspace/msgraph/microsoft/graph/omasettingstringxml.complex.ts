//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OmaSetting } from './omasetting.complex';
//#endregion

export interface OmaSettingStringXml extends OmaSetting {
  //#region ODataApiGen Properties
  fileName?: string;
  value: ArrayBuffer;
  //#endregion
}