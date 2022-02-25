//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PhoneType } from './phonetype.enum';
//#endregion

export interface Phone {
  //#region ODataApiGen Properties
  type?: PhoneType;
  number?: string;
  region?: string;
  language?: string;
  //#endregion
}