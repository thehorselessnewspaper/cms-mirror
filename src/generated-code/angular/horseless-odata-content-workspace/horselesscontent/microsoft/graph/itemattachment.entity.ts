//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Attachment } from './attachment.entity';
import { OutlookItem } from './outlookitem.entity';
//#endregion

export interface ItemAttachment extends Attachment {
  //#region ODataApiGen Properties
  item?: OutlookItem;
  //#endregion
}