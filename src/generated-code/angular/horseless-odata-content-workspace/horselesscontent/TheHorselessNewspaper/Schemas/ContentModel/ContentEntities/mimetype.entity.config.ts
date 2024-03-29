﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MIMEType } from './mimetype.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MIMETypeEntityConfig = {
  name: 'MIMEType',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    MIMETypeName: {type: 'Edm.String'},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    HorselessContents: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.HorselessContent', collection: true, navigation: true},
    AccessControlList: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<MIMEType>;
//#endregion