//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { TermsAndConditions } from './termsandconditions.entity';
//#endregion

export interface TermsAndConditionsAcceptanceStatus extends Entity {
  //#region ODataApiGen Properties
  userDisplayName?: string;
  acceptedVersion: number;
  acceptedDateTime: Date;
  userPrincipalName?: string;
  termsAndConditions?: TermsAndConditions;
  //#endregion
}