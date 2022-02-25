//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FileAttachment } from './fileattachment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FileAttachmentEntityConfig = {
  name: 'fileAttachment',
  base: 'microsoft.graph.attachment',
  fields: {
    contentId: {type: 'Edm.String'},
    contentLocation: {type: 'Edm.String'},
    contentBytes: {type: 'Edm.Binary'}
  }
} as StructuredTypeConfig<FileAttachment>;
//#endregion