//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface WorkbookFormatProtection extends Entity {
  //#region ODataApiGen Properties
  formulaHidden?: boolean;
  locked?: boolean;
  //#endregion
}