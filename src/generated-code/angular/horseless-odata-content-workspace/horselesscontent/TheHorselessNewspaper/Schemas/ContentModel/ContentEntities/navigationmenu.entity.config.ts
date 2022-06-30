//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { NavigationMenu } from './navigationmenu.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const NavigationMenuEntityConfig = {
  name: 'NavigationMenu',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    DisplayName: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    PublishAt: {type: 'Edm.DateTimeOffset'},
    UnPublishAt: {type: 'Edm.DateTimeOffset'},
    IsPublished: {type: 'Edm.Boolean'},
    MenuLabel: {type: 'Edm.String'},
    MenuDescription: {type: 'Edm.String'},
    MenuAltText: {type: 'Edm.String'},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    ChildNavigationMenuItems: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.NavigationMenuItem', collection: true, navigation: true},
    Children: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.NavigationMenu', collection: true, navigation: true},
    Parents: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.NavigationMenu', collection: true, navigation: true},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<NavigationMenu>;
//#endregion