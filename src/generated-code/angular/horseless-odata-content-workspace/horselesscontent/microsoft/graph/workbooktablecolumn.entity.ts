//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Json } from './json.complex';
import { WorkbookFilter } from './workbookfilter.entity';
//#endregion

export interface WorkbookTableColumn extends Entity {
  //#region ODataApiGen Properties
  index: number;
  name?: string;
  values?: Json;
  filter?: WorkbookFilter;
  //#endregion
}