//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ResponseType } from './responsetype.enum';
//#endregion

export interface ResponseStatus {
  //#region ODataApiGen Properties
  response?: ResponseType;
  time?: Date;
  //#endregion
}