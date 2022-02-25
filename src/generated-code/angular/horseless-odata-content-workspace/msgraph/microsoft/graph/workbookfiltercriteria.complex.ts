//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Json } from './json.complex';
import { WorkbookIcon } from './workbookicon.complex';
//#endregion

export interface WorkbookFilterCriteria {
  //#region ODataApiGen Properties
  color?: string;
  criterion1?: string;
  criterion2?: string;
  dynamicCriteria: string;
  filterOn: string;
  icon?: WorkbookIcon;
  operator: string;
  values?: Json;
  //#endregion
}