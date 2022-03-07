//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Taxonomy } from './taxonomy.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TaxonomyEntityConfig = {
  name: 'Taxonomy',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    JsonValue: {type: 'Edm.String'},
    JsonSchema: {type: 'Edm.String'},
    ContentCollections: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.ContentCollection', collection: true, navigation: true},
    Taxons: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Taxon', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Taxonomy>;
//#endregion