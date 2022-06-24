//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { Principal } from './principal.entity';
import { PrincipalClaimContainer } from './principalclaimcontainer.entity';
//#endregion

export interface PrincipalClaim {
  //#region ODataApiGen Properties
  Id: string;
  ClaimType: string;
  ClaimValue: string;
  ClaimValueType: string;
  ClaimIssuer: string;
  PrincipalClaimContainerId?: string;
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  PrincipalClaimContainer?: PrincipalClaimContainer;
  //#endregion
}