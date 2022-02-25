//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MailTips } from './mailtips.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MailTipsComplexConfig = {
  name: 'mailTips',
  fields: {
    emailAddress: {type: 'graph.emailAddress'},
    automaticReplies: {type: 'graph.automaticRepliesMailTips'},
    mailboxFull: {type: 'Edm.Boolean'},
    customMailTip: {type: 'Edm.String'},
    externalMemberCount: {type: 'Edm.Int32'},
    totalMemberCount: {type: 'Edm.Int32'},
    deliveryRestricted: {type: 'Edm.Boolean'},
    isModerated: {type: 'Edm.Boolean'},
    recipientScope: {type: 'graph.recipientScopeType'},
    recipientSuggestions: {type: 'graph.recipient', collection: true},
    maxMessageSize: {type: 'Edm.Int32'},
    error: {type: 'graph.mailTipsError'}
  }
} as StructuredTypeConfig<MailTips>;
//#endregion