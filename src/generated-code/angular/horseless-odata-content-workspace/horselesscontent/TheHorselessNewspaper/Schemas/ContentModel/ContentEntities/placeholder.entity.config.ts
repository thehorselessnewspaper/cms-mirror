﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Placeholder } from './placeholder.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlaceholderEntityConfig = {
  name: 'Placeholder',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    IsPublished: {type: 'Edm.Boolean'},
    Description: {type: 'Edm.String'},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    AccessControlList: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Placeholder>;
//#endregion