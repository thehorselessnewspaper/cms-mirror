//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MailTipsType } from './mailtipstype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const MailTipsTypeConfig = {
  name: 'mailTipsType',
  flags: true,
  members: MailTipsType,
  fields: {
    automaticReplies: {value: 1},
    mailboxFullStatus: {value: 2},
    customMailTip: {value: 4},
    externalMemberCount: {value: 8},
    totalMemberCount: {value: 16},
    maxMessageSize: {value: 32},
    deliveryRestriction: {value: 64},
    moderationStatus: {value: 128},
    recipientScope: {value: 256},
    recipientSuggestions: {value: 512}
  }
} as EnumTypeConfig<MailTipsType>;
//#endregion