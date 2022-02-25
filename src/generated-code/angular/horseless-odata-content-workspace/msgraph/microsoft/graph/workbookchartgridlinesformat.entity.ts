//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
//#endregion

export interface WorkbookChartGridlinesFormat extends Entity {
  //#region ODataApiGen Properties
  line?: WorkbookChartLineFormat;
  //#endregion
}