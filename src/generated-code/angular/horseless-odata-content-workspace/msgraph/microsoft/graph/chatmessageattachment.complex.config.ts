//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChatMessageAttachment } from './chatmessageattachment.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ChatMessageAttachmentComplexConfig = {
  name: 'chatMessageAttachment',
  fields: {
    id: {type: 'Edm.String'},
    contentType: {type: 'Edm.String'},
    contentUrl: {type: 'Edm.String'},
    content: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    thumbnailUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ChatMessageAttachment>;
//#endregion