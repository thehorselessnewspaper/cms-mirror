//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
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
  Timestamp: ArrayBuffer;
  AccessControlList?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}