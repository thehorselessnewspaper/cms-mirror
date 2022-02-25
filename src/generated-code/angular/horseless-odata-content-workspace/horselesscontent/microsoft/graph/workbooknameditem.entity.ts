//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Json } from './json.complex';
import { WorkbookWorksheet } from './workbookworksheet.entity';
//#endregion

export interface WorkbookNamedItem extends Entity {
  //#region ODataApiGen Properties
  comment?: string;
  name?: string;
  scope: string;
  type?: string;
  value?: Json;
  visible: boolean;
  worksheet?: WorkbookWorksheet;
  //#endregion
}