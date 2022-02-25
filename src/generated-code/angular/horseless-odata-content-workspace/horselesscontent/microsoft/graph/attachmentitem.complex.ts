//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AttachmentType } from './attachmenttype.enum';
//#endregion

export interface AttachmentItem {
  //#region ODataApiGen Properties
  attachmentType?: AttachmentType;
  name?: string;
  size?: number;
  contentType?: string;
  isInline?: boolean;
  //#endregion
}