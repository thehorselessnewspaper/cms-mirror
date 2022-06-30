//#region ODataApiGen ODataImports
import {
  Duration
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { ContentCollection } from './contentcollection.entity';
import { Principal } from './principal.entity';
import { Taxon } from './taxon.entity';
//#endregion

export interface Taxonomy {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  JsonValue?: string;
  JsonSchema?: string;
  Timestamp: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  ContentCollections?: ContentCollection[];
  Taxons?: Taxon[];
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}