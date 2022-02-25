//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface WorkbookChartFont extends Entity {
  //#region ODataApiGen Properties
  bold?: boolean;
  color?: string;
  italic?: boolean;
  name?: string;
  size?: number;
  underline?: string;
  //#endregion
}