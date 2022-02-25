//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Json } from './json.complex';
//#endregion

export interface WorkbookRangeView extends Entity {
  //#region ODataApiGen Properties
  cellAddresses?: Json;
  columnCount: number;
  formulas?: Json;
  formulasLocal?: Json;
  formulasR1C1?: Json;
  index: number;
  numberFormat?: Json;
  rowCount: number;
  text?: Json;
  valueTypes?: Json;
  values?: Json;
  rows?: WorkbookRangeView[];
  //#endregion
}