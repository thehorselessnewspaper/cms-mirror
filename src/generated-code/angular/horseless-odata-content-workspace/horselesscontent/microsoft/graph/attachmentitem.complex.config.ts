//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AttachmentItem } from './attachmentitem.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AttachmentItemComplexConfig = {
  name: 'attachmentItem',
  fields: {
    attachmentType: {type: 'graph.attachmentType'},
    name: {type: 'Edm.String'},
    size: {type: 'Edm.Int64'},
    contentType: {type: 'Edm.String'},
    isInline: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<AttachmentItem>;
//#endregion