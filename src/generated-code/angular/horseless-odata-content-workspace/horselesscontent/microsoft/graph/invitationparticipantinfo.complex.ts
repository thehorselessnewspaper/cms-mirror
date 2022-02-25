//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IdentitySet } from './identityset.complex';
//#endregion

export interface InvitationParticipantInfo {
  //#region ODataApiGen Properties
  identity: IdentitySet;
  replacesCallId?: string;
  //#endregion
}