//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChatInfo } from './chatinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ChatInfoComplexConfig = {
  name: 'chatInfo',
  fields: {
    threadId: {type: 'Edm.String'},
    messageId: {type: 'Edm.String'},
    replyChainMessageId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ChatInfo>;
//#endregion