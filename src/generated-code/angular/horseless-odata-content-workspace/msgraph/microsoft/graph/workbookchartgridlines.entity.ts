//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookChartGridlinesFormat } from './workbookchartgridlinesformat.entity';
//#endregion

export interface WorkbookChartGridlines extends Entity {
  //#region ODataApiGen Properties
  visible: boolean;
  format?: WorkbookChartGridlinesFormat;
  //#endregion
}