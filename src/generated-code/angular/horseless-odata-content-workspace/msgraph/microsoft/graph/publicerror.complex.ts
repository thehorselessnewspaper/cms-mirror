//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PublicErrorDetail } from './publicerrordetail.complex';
import { PublicInnerError } from './publicinnererror.complex';
//#endregion

export interface PublicError {
  //#region ODataApiGen Properties
  code?: string;
  message?: string;
  target?: string;
  details?: PublicErrorDetail[];
  innerError?: PublicInnerError;
  //#endregion
}