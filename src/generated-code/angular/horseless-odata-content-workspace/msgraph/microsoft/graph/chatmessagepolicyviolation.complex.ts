//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChatMessagePolicyViolationDlpActionTypes } from './chatmessagepolicyviolationdlpactiontypes.enum';
import { ChatMessagePolicyViolationUserActionTypes } from './chatmessagepolicyviolationuseractiontypes.enum';
import { ChatMessagePolicyViolationVerdictDetailsTypes } from './chatmessagepolicyviolationverdictdetailstypes.enum';
import { ChatMessagePolicyViolationPolicyTip } from './chatmessagepolicyviolationpolicytip.complex';
//#endregion

export interface ChatMessagePolicyViolation {
  //#region ODataApiGen Properties
  dlpAction?: ChatMessagePolicyViolationDlpActionTypes;
  justificationText?: string;
  policyTip?: ChatMessagePolicyViolationPolicyTip;
  userAction?: ChatMessagePolicyViolationUserActionTypes;
  verdictDetails?: ChatMessagePolicyViolationVerdictDetailsTypes;
  //#endregion
}