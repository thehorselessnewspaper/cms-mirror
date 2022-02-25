//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookSortField } from './workbooksortfield.complex';
//#endregion

export interface WorkbookTableSort extends Entity {
  //#region ODataApiGen Properties
  fields?: WorkbookSortField[];
  matchCase: boolean;
  method: string;
  //#endregion
}