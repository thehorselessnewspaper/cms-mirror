//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Recipient } from './recipient.complex';
//#endregion

export interface InvitedUserMessageInfo {
  //#region ODataApiGen Properties
  ccRecipients?: Recipient[];
  messageLanguage?: string;
  customizedMessageBody?: string;
  //#endregion
}