//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Json } from './json.complex';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookRangeFormat } from './workbookrangeformat.entity';
import { WorkbookRangeSort } from './workbookrangesort.entity';
//#endregion

export interface WorkbookRange extends Entity {
  //#region ODataApiGen Properties
  address?: string;
  addressLocal?: string;
  cellCount: number;
  columnCount: number;
  columnHidden?: boolean;
  columnIndex: number;
  formulas?: Json;
  formulasLocal?: Json;
  formulasR1C1?: Json;
  hidden?: boolean;
  numberFormat?: Json;
  rowCount: number;
  rowHidden?: boolean;
  rowIndex: number;
  text?: Json;
  valueTypes?: Json;
  values?: Json;
  format?: WorkbookRangeFormat;
  sort?: WorkbookRangeSort;
  worksheet?: WorkbookWorksheet;
  //#endregion
}