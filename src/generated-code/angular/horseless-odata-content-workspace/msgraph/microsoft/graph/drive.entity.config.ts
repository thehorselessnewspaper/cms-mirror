//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Drive } from './drive.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DriveEntityConfig = {
  name: 'drive',
  base: 'microsoft.graph.baseItem',
  fields: {
    driveType: {type: 'Edm.String'},
    owner: {type: 'graph.identitySet'},
    quota: {type: 'graph.quota'},
    sharePointIds: {type: 'graph.sharepointIds'},
    system: {type: 'graph.systemFacet'},
    following: {type: 'graph.driveItem', collection: true, navigation: true},
    items: {type: 'graph.driveItem', collection: true, navigation: true},
    list: {type: 'graph.list', navigation: true},
    root: {type: 'graph.driveItem', navigation: true},
    special: {type: 'graph.driveItem', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Drive>;
//#endregion