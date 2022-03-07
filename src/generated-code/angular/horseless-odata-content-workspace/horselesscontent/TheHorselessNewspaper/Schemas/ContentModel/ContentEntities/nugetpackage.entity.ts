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
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  PublishAt?: Date;
  UnPublishAt?: Date;
  IsPublished?: boolean;
  PackageId?: string;
  PackageVersion?: string;
  PackageAuthor?: string;
  PackageSource?: string;
  Timestamp: ArrayBuffer;
  AccessControlList?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}