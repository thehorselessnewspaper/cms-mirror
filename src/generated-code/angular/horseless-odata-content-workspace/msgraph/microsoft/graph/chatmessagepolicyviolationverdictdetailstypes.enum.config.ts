//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChatMessagePolicyViolationVerdictDetailsTypes } from './chatmessagepolicyviolationverdictdetailstypes.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ChatMessagePolicyViolationVerdictDetailsTypesConfig = {
  name: 'chatMessagePolicyViolationVerdictDetailsTypes',
  flags: true,
  members: ChatMessagePolicyViolationVerdictDetailsTypes,
  fields: {
    none: {value: 0},
    allowFalsePositiveOverride: {value: 1},
    allowOverrideWithoutJustification: {value: 2},
    allowOverrideWithJustification: {value: 4}
  }
} as EnumTypeConfig<ChatMessagePolicyViolationVerdictDetailsTypes>;
//#endregion