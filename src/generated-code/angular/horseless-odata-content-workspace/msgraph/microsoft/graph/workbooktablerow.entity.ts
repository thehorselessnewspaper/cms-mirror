//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Json } from './json.complex';
//#endregion

export interface WorkbookTableRow extends Entity {
  //#region ODataApiGen Properties
  index: number;
  values?: Json;
  //#endregion
}