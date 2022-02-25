//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChatMessageType } from './chatmessagetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ChatMessageTypeConfig = {
  name: 'chatMessageType',
  members: ChatMessageType,
  fields: {
    message: {value: 0},
    chatEvent: {value: 1},
    typing: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<ChatMessageType>;
//#endregion