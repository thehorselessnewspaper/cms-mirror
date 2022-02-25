//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookChartFont } from './workbookchartfont.entity';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
//#endregion

export interface WorkbookChartAxisFormat extends Entity {
  //#region ODataApiGen Properties
  font?: WorkbookChartFont;
  line?: WorkbookChartLineFormat;
  //#endregion
}