//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookIcon } from './workbookicon.complex';
//#endregion

export interface WorkbookSortField {
  //#region ODataApiGen Properties
  ascending: boolean;
  color?: string;
  dataOption: string;
  icon?: WorkbookIcon;
  key: number;
  sortOn: string;
  //#endregion
}