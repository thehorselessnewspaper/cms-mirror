﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { Meronym } from './meronym.entity';
import { Principal } from './principal.entity';
import { Taxon } from './taxon.entity';
//#endregion

export interface Holonym {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  JsonValue?: string;
  JsonSchema?: string;
  Timestamp: ArrayBuffer;
  Meronyms?: Meronym[];
  Taxons?: Taxon[];
  AccessControlList?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}