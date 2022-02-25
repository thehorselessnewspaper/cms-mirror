//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Importance } from './importance.enum';
import { Sensitivity } from './sensitivity.enum';
import { MessageActionFlag } from './messageactionflag.enum';
import { Recipient } from './recipient.complex';
import { SizeRange } from './sizerange.complex';
//#endregion

export interface MessageRulePredicates {
  //#region ODataApiGen Properties
  categories?: string[];
  subjectContains?: string[];
  bodyContains?: string[];
  bodyOrSubjectContains?: string[];
  senderContains?: string[];
  recipientContains?: string[];
  headerContains?: string[];
  messageActionFlag?: MessageActionFlag;
  importance?: Importance;
  sensitivity?: Sensitivity;
  fromAddresses?: Recipient[];
  sentToAddresses?: Recipient[];
  sentToMe?: boolean;
  sentOnlyToMe?: boolean;
  sentCcMe?: boolean;
  sentToOrCcMe?: boolean;
  notSentToMe?: boolean;
  hasAttachments?: boolean;
  isApprovalRequest?: boolean;
  isAutomaticForward?: boolean;
  isAutomaticReply?: boolean;
  isEncrypted?: boolean;
  isMeetingRequest?: boolean;
  isMeetingResponse?: boolean;
  isNonDeliveryReport?: boolean;
  isPermissionControlled?: boolean;
  isReadReceipt?: boolean;
  isSigned?: boolean;
  isVoicemail?: boolean;
  withinSizeRange?: SizeRange;
  //#endregion
}