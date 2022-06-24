//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { Principal } from './principal.entity';
//#endregion

export interface NugetPackage {
  //#region ODataApiGen Properties
  Id: string;
  IsSoftDeleted?: boolean;
  Timestamp?: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  ObjectId?: string;
  PackageName?: string;
  PackageId?: string;
  Publisher?: string;
  Version?: string;
  CreatedAt?: Date;
  DisplayName?: string;
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}