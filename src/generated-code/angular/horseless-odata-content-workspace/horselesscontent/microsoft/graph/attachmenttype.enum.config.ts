//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AttachmentType } from './attachmenttype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const AttachmentTypeConfig = {
  name: 'attachmentType',
  members: AttachmentType,
  fields: {
    file: {value: 0},
    item: {value: 1},
    reference: {value: 2}
  }
} as EnumTypeConfig<AttachmentType>;
//#endregion