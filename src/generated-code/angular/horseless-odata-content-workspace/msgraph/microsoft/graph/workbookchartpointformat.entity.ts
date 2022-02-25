//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookChartFill } from './workbookchartfill.entity';
//#endregion

export interface WorkbookChartPointFormat extends Entity {
  //#region ODataApiGen Properties
  fill?: WorkbookChartFill;
  //#endregion
}