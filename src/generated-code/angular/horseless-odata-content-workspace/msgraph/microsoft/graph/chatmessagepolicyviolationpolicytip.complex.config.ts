//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChatMessagePolicyViolationPolicyTip } from './chatmessagepolicyviolationpolicytip.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ChatMessagePolicyViolationPolicyTipComplexConfig = {
  name: 'chatMessagePolicyViolationPolicyTip',
  fields: {
    generalText: {type: 'Edm.String'},
    complianceUrl: {type: 'Edm.String'},
    matchedConditionDescriptions: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<ChatMessagePolicyViolationPolicyTip>;
//#endregion