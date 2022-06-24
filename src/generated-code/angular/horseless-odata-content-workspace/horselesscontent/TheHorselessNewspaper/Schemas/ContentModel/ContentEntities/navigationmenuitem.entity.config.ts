//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NavigationMenuItem } from './navigationmenuitem.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const NavigationMenuItemEntityConfig = {
  name: 'NavigationMenuItem',
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
    MenuItemLabel: {type: 'Edm.String'},
    MenuItemDescription: {type: 'Edm.String'},
    MenuItemAltText: {type: 'Edm.String'},
    Timestamp: {type: 'Edm.Binary', nullable: false},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    ChildNavigationItems: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.NavigationMenuItem', collection: true, navigation: true},
    ParentNavigationItems: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.NavigationMenuItem', collection: true, navigation: true},
    ParentNavigationMenus: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.NavigationMenu', collection: true, navigation: true},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<NavigationMenuItem>;
//#endregion