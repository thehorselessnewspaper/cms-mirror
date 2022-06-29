//#region ODataApiGen ODataImports
import {
  Duration
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { HorselessSession } from './horselesssession.entity';
import { Tenant } from './tenant.entity';
import { PrincipalClaimContainer } from './principalclaimcontainer.entity';
//#endregion

export interface Principal {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  Iss?: string;
  Aud?: string;
  Sub?: string;
  IsAnonymous: boolean;
  UPN: string;
  Email: string;
  PreferredUserName: string;
  Timestamp: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  HorselessSessions?: HorselessSession[];
  AccessControlEntries?: AccessControlEntry[];
  OwnedAccessControlEntries?: AccessControlEntry[];
  OwnedHorselessSessions?: HorselessSession[];
  OwnedPrincipals?: Principal[];
  OwnedTenants?: Tenant[];
  Owners?: Principal[];
  TenantAccounts?: Tenant[];
  PrincipalClaimContainer?: PrincipalClaimContainer;
  //#endregion
}