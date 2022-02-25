//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SharedDriveItem } from './shareddriveitem.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SharedDriveItemEntityConfig = {
  name: 'sharedDriveItem',
  base: 'microsoft.graph.baseItem',
  fields: {
    owner: {type: 'graph.identitySet'},
    driveItem: {type: 'graph.driveItem', navigation: true},
    items: {type: 'graph.driveItem', collection: true, navigation: true},
    list: {type: 'graph.list', navigation: true},
    listItem: {type: 'graph.listItem', navigation: true},
    permission: {type: 'graph.permission', navigation: true},
    root: {type: 'graph.driveItem', navigation: true},
    site: {type: 'graph.site', navigation: true}
  }
} as StructuredTypeConfig<SharedDriveItem>;
//#endregion