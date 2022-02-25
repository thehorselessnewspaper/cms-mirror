//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChatMessageImportance } from './chatmessageimportance.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ChatMessageImportanceConfig = {
  name: 'chatMessageImportance',
  members: ChatMessageImportance,
  fields: {
    normal: {value: 0},
    high: {value: 1},
    urgent: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<ChatMessageImportance>;
//#endregion