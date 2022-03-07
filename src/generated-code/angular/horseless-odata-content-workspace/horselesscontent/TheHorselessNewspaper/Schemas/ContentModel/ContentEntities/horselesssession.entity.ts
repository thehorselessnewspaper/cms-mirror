//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

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
  Timestamp: ArrayBuffer;
  AccessControlList?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}