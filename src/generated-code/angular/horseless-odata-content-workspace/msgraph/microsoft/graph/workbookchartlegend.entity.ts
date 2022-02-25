//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookChartLegendFormat } from './workbookchartlegendformat.entity';
//#endregion

export interface WorkbookChartLegend extends Entity {
  //#region ODataApiGen Properties
  overlay?: boolean;
  position?: string;
  visible: boolean;
  format?: WorkbookChartLegendFormat;
  //#endregion
}