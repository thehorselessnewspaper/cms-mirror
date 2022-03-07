//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ContentCollection } from './contentcollection.entity';
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
  ContentCollections?: ContentCollection[];
  Taxons?: Taxon[];
  //#endregion
}