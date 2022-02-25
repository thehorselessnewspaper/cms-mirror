//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InvitedUserMessageInfo } from './invitedusermessageinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const InvitedUserMessageInfoComplexConfig = {
  name: 'invitedUserMessageInfo',
  fields: {
    ccRecipients: {type: 'graph.recipient', collection: true},
    messageLanguage: {type: 'Edm.String'},
    customizedMessageBody: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<InvitedUserMessageInfo>;
//#endregion