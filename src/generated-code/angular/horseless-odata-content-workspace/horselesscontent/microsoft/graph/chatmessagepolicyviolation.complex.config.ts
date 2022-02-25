//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChatMessagePolicyViolation } from './chatmessagepolicyviolation.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ChatMessagePolicyViolationComplexConfig = {
  name: 'chatMessagePolicyViolation',
  fields: {
    dlpAction: {type: 'graph.chatMessagePolicyViolationDlpActionTypes'},
    justificationText: {type: 'Edm.String'},
    policyTip: {type: 'graph.chatMessagePolicyViolationPolicyTip'},
    userAction: {type: 'graph.chatMessagePolicyViolationUserActionTypes'},
    verdictDetails: {type: 'graph.chatMessagePolicyViolationVerdictDetailsTypes'}
  }
} as StructuredTypeConfig<ChatMessagePolicyViolation>;
//#endregion