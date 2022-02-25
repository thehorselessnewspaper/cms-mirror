//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Endpoint } from './endpoint.complex';
import { IdentitySet } from '../identityset.complex';
import { UserFeedback } from './userfeedback.complex';
//#endregion

export interface ParticipantEndpoint extends Endpoint {
  //#region ODataApiGen Properties
  identity?: IdentitySet;
  feedback?: UserFeedback;
  //#endregion
}