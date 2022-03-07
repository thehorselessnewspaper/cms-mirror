//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { HorselessContent } from './horselesscontent.entity';
import { Principal } from './principal.entity';
//#endregion

export interface JSONAsset {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  JsonValue?: string;
  JsonSchema?: string;
  Timestamp: ArrayBuffer;
  HorselessContents?: HorselessContent[];
  AccessControlList?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}