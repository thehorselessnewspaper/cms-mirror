//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Attachment } from './attachment.entity';
//#endregion

export interface FileAttachment extends Attachment {
  //#region ODataApiGen Properties
  contentId?: string;
  contentLocation?: string;
  contentBytes?: ArrayBuffer;
  //#endregion
}