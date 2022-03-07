//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { Holonym } from './holonym.entity';
import { Principal } from './principal.entity';
import { Taxonomy } from './taxonomy.entity';
//#endregion

export interface Taxon {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  JsonValue?: string;
  JsonSchema?: string;
  Timestamp: ArrayBuffer;
  AntecedentTaxons?: Taxon[];
  DerivativeTaxons?: Taxon[];
  Holonyms?: Holonym[];
  Taxonomies?: Taxonomy[];
  AccessControlList?: AccessControlEntry[];
  Owners?: Principal[];
  //#endregion
}