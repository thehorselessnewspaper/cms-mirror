//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EndpointType } from './endpointtype.enum';
import { IdentitySet } from './identityset.complex';
//#endregion

export interface ParticipantInfo {
  //#region ODataApiGen Properties
  identity: IdentitySet;
  endpointType?: EndpointType;
  region?: string;
  languageId?: string;
  countryCode?: string;
  //#endregion
}