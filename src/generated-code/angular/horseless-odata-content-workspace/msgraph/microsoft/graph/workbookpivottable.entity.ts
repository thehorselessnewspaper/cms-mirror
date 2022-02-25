//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
//#endregion

export interface WorkbookPivotTable extends Entity {
  //#region ODataApiGen Properties
  name?: string;
  worksheet?: WorkbookWorksheet;
  //#endregion
}