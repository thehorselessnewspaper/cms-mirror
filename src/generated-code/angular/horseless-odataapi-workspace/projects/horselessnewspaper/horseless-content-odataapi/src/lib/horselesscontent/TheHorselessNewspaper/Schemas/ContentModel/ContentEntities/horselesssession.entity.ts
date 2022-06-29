//#region ODataApiGen ODataImports
import {
  Duration
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { Principal } from './principal.entity';
//#endregion

export interface HorselessSession {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  SessionId?: string;
  Iss?: string;
  Aud?: string;
  Sub?: string;
  IsAnonymous?: boolean;
  HorselessSessionPrincipalId?: string;
  Timestamp: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  HorselessSessionPrincipal?: Principal;
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}