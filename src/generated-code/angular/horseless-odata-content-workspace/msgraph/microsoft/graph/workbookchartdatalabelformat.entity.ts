//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookChartFill } from './workbookchartfill.entity';
import { WorkbookChartFont } from './workbookchartfont.entity';
//#endregion

export interface WorkbookChartDataLabelFormat extends Entity {
  //#region ODataApiGen Properties
  fill?: WorkbookChartFill;
  font?: WorkbookChartFont;
  //#endregion
}