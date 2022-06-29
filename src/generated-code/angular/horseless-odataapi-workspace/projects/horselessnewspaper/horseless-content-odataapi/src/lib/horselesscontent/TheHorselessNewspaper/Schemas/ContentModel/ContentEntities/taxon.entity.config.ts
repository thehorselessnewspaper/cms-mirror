//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { Taxon } from './taxon.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TaxonEntityConfig = {
  name: 'Taxon',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    JsonValue: {type: 'Edm.String'},
    JsonSchema: {type: 'Edm.String'},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    AntecedentTaxons: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Taxon', collection: true, navigation: true},
    DerivativeTaxons: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Taxon', collection: true, navigation: true},
    Holonyms: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Holonym', collection: true, navigation: true},
    Taxonomies: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Taxonomy', collection: true, navigation: true},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Taxon>;
//#endregion