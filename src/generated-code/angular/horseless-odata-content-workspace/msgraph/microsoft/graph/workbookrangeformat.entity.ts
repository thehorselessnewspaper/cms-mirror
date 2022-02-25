//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookFormatProtection } from './workbookformatprotection.entity';
import { WorkbookRangeBorder } from './workbookrangeborder.entity';
import { WorkbookRangeFill } from './workbookrangefill.entity';
import { WorkbookRangeFont } from './workbookrangefont.entity';
//#endregion

export interface WorkbookRangeFormat extends Entity {
  //#region ODataApiGen Properties
  columnWidth?: number;
  horizontalAlignment?: string;
  rowHeight?: number;
  verticalAlignment?: string;
  wrapText?: boolean;
  borders?: WorkbookRangeBorder[];
  fill?: WorkbookRangeFill;
  font?: WorkbookRangeFont;
  protection?: WorkbookFormatProtection;
  //#endregion
}