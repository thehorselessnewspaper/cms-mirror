//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Holonym } from './holonym.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const HolonymEntityConfig = {
  name: 'Holonym',
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
    Meronyms: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Meronym', collection: true, navigation: true},
    Taxons: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Taxon', collection: true, navigation: true},
    AccessControlList: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Holonym>;
//#endregion