//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChatMessagePolicyViolationUserActionTypes } from './chatmessagepolicyviolationuseractiontypes.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ChatMessagePolicyViolationUserActionTypesConfig = {
  name: 'chatMessagePolicyViolationUserActionTypes',
  flags: true,
  members: ChatMessagePolicyViolationUserActionTypes,
  fields: {
    none: {value: 0},
    override: {value: 1},
    reportFalsePositive: {value: 2}
  }
} as EnumTypeConfig<ChatMessagePolicyViolationUserActionTypes>;
//#endregion