//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Json } from './json.complex';
import { WorkbookChartAxisFormat } from './workbookchartaxisformat.entity';
import { WorkbookChartGridlines } from './workbookchartgridlines.entity';
import { WorkbookChartAxisTitle } from './workbookchartaxistitle.entity';
//#endregion

export interface WorkbookChartAxis extends Entity {
  //#region ODataApiGen Properties
  majorUnit?: Json;
  maximum?: Json;
  minimum?: Json;
  minorUnit?: Json;
  format?: WorkbookChartAxisFormat;
  majorGridlines?: WorkbookChartGridlines;
  minorGridlines?: WorkbookChartGridlines;
  title?: WorkbookChartAxisTitle;
  //#endregion
}