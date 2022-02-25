//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IdentitySet } from './identityset.complex';
//#endregion

export interface MeetingParticipantInfo {
  //#region ODataApiGen Properties
  identity?: IdentitySet;
  upn?: string;
  //#endregion
}