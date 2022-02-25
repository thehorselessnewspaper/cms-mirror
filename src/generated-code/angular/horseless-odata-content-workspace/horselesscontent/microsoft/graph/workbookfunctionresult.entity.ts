//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Json } from './json.complex';
//#endregion

export interface WorkbookFunctionResult extends Entity {
  //#region ODataApiGen Properties
  error?: string;
  value?: Json;
  //#endregion
}