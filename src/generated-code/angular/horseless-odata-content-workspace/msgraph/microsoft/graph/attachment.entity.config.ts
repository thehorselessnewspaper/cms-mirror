//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Attachment } from './attachment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AttachmentEntityConfig = {
  name: 'attachment',
  base: 'microsoft.graph.entity',
  fields: {
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    name: {type: 'Edm.String'},
    contentType: {type: 'Edm.String'},
    size: {type: 'Edm.Int32', nullable: false},
    isInline: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<Attachment>;
//#endregion