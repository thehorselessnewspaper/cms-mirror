//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookChartTitleFormat } from './workbookcharttitleformat.entity';
//#endregion

export interface WorkbookChartTitle extends Entity {
  //#region ODataApiGen Properties
  overlay?: boolean;
  text?: string;
  visible: boolean;
  format?: WorkbookChartTitleFormat;
  //#endregion
}