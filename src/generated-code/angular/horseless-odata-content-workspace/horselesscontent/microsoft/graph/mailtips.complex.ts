//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RecipientScopeType } from './recipientscopetype.enum';
import { Recipient } from './recipient.complex';
import { EmailAddress } from './emailaddress.complex';
import { AutomaticRepliesMailTips } from './automaticrepliesmailtips.complex';
import { MailTipsError } from './mailtipserror.complex';
//#endregion

export interface MailTips {
  //#region ODataApiGen Properties
  emailAddress?: EmailAddress;
  automaticReplies?: AutomaticRepliesMailTips;
  mailboxFull?: boolean;
  customMailTip?: string;
  externalMemberCount?: number;
  totalMemberCount?: number;
  deliveryRestricted?: boolean;
  isModerated?: boolean;
  recipientScope?: RecipientScopeType;
  recipientSuggestions?: Recipient[];
  maxMessageSize?: number;
  error?: MailTipsError;
  //#endregion
}