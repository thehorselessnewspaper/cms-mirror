//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookChartAxis } from './workbookchartaxis.entity';
//#endregion

export interface WorkbookChartAxes extends Entity {
  //#region ODataApiGen Properties
  categoryAxis?: WorkbookChartAxis;
  seriesAxis?: WorkbookChartAxis;
  valueAxis?: WorkbookChartAxis;
  //#endregion
}