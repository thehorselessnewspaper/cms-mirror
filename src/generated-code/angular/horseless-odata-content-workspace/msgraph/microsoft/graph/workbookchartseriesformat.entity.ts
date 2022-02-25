//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookChartFill } from './workbookchartfill.entity';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
//#endregion

export interface WorkbookChartSeriesFormat extends Entity {
  //#region ODataApiGen Properties
  fill?: WorkbookChartFill;
  line?: WorkbookChartLineFormat;
  //#endregion
}