//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IdentitySet } from './identityset.complex';
//#endregion

export interface IncomingContext {
  //#region ODataApiGen Properties
  sourceParticipantId?: string;
  observedParticipantId?: string;
  onBehalfOf?: IdentitySet;
  transferor?: IdentitySet;
  //#endregion
}