//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { InvitedUserMessageInfo } from './invitedusermessageinfo.complex';
import { User } from './user.entity';
//#endregion

export interface Invitation extends Entity {
  //#region ODataApiGen Properties
  invitedUserDisplayName?: string;
  invitedUserType?: string;
  invitedUserEmailAddress: string;
  invitedUserMessageInfo?: InvitedUserMessageInfo;
  sendInvitationMessage?: boolean;
  inviteRedirectUrl: string;
  inviteRedeemUrl?: string;
  status?: string;
  invitedUser?: User;
  //#endregion
}