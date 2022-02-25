//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookChartPoint } from './workbookchartpoint.entity';
import { WorkbookChartSeriesFormat } from './workbookchartseriesformat.entity';
//#endregion

export interface WorkbookChartSeries extends Entity {
  //#region ODataApiGen Properties
  name?: string;
  format?: WorkbookChartSeriesFormat;
  points?: WorkbookChartPoint[];
  //#endregion
}