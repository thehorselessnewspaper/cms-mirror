//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ItemAttachment } from './itemattachment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ItemAttachmentEntityConfig = {
  name: 'itemAttachment',
  base: 'microsoft.graph.attachment',
  fields: {
    item: {type: 'graph.outlookItem', navigation: true}
  }
} as StructuredTypeConfig<ItemAttachment>;
//#endregion