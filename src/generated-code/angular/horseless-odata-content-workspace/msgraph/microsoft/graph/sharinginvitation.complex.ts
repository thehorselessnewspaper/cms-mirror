//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IdentitySet } from './identityset.complex';
//#endregion

export interface SharingInvitation {
  //#region ODataApiGen Properties
  email?: string;
  invitedBy?: IdentitySet;
  redeemedBy?: string;
  signInRequired?: boolean;
  //#endregion
}