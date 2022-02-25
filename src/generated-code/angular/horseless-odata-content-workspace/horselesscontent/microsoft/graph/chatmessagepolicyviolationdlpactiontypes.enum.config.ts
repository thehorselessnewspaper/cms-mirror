//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChatMessagePolicyViolationDlpActionTypes } from './chatmessagepolicyviolationdlpactiontypes.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ChatMessagePolicyViolationDlpActionTypesConfig = {
  name: 'chatMessagePolicyViolationDlpActionTypes',
  flags: true,
  members: ChatMessagePolicyViolationDlpActionTypes,
  fields: {
    none: {value: 0},
    notifySender: {value: 1},
    blockAccess: {value: 2},
    blockAccessExternal: {value: 4}
  }
} as EnumTypeConfig<ChatMessagePolicyViolationDlpActionTypes>;
//#endregion