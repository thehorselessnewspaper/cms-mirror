//#region ODataApiGen ODataImports
import {
  Duration
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { Principal } from './principal.entity';
import { PrincipalClaim } from './principalclaim.entity';
//#endregion

export interface PrincipalClaimContainer {
  //#region ODataApiGen Properties
  Id: string;
  ObjectId?: string;
  DisplayName?: string;
  PrincipalId?: string;
  PrincipalClaim?: PrincipalClaim[];
  Principal?: Principal;
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}