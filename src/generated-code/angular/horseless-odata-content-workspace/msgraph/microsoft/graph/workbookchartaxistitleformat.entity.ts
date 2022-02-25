//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookChartFont } from './workbookchartfont.entity';
//#endregion

export interface WorkbookChartAxisTitleFormat extends Entity {
  //#region ODataApiGen Properties
  font?: WorkbookChartFont;
  //#endregion
}