//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GenericError } from './genericerror.complex';
//#endregion

export interface ConvertIdResult {
  //#region ODataApiGen Properties
  sourceId?: string;
  targetId?: string;
  errorDetails?: GenericError;
  //#endregion
}