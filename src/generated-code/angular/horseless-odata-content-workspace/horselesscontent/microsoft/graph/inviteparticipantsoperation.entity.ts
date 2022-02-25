//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CommsOperation } from './commsoperation.entity';
import { InvitationParticipantInfo } from './invitationparticipantinfo.complex';
//#endregion

export interface InviteParticipantsOperation extends CommsOperation {
  //#region ODataApiGen Properties
  participants: InvitationParticipantInfo[];
  //#endregion
}