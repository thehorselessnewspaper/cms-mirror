//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookApplication } from './workbookapplication.entity';
import { WorkbookNamedItem } from './workbooknameditem.entity';
import { WorkbookTable } from './workbooktable.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookComment } from './workbookcomment.entity';
import { WorkbookFunctions } from './workbookfunctions.entity';
//#endregion

export interface Workbook extends Entity {
  //#region ODataApiGen Properties
  application?: WorkbookApplication;
  names?: WorkbookNamedItem[];
  tables?: WorkbookTable[];
  worksheets?: WorkbookWorksheet[];
  comments?: WorkbookComment[];
  functions?: WorkbookFunctions;
  //#endregion
}