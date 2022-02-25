//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PublicErrorDetail } from './publicerrordetail.complex';
//#endregion

export interface PublicInnerError {
  //#region ODataApiGen Properties
  code?: string;
  details?: PublicErrorDetail[];
  message?: string;
  target?: string;
  //#endregion
}