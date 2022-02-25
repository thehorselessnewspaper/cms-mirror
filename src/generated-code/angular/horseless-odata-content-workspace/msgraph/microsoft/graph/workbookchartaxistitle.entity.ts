//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookChartAxisTitleFormat } from './workbookchartaxistitleformat.entity';
//#endregion

export interface WorkbookChartAxisTitle extends Entity {
  //#region ODataApiGen Properties
  text?: string;
  visible: boolean;
  format?: WorkbookChartAxisTitleFormat;
  //#endregion
}