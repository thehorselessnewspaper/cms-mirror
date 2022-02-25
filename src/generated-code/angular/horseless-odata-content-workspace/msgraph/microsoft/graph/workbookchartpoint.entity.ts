//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Json } from './json.complex';
import { WorkbookChartPointFormat } from './workbookchartpointformat.entity';
//#endregion

export interface WorkbookChartPoint extends Entity {
  //#region ODataApiGen Properties
  value?: Json;
  format?: WorkbookChartPointFormat;
  //#endregion
}