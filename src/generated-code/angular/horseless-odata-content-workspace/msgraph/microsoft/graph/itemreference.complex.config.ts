//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ItemReference } from './itemreference.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ItemReferenceComplexConfig = {
  name: 'itemReference',
  fields: {
    driveId: {type: 'Edm.String'},
    driveType: {type: 'Edm.String'},
    id: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    path: {type: 'Edm.String'},
    shareId: {type: 'Edm.String'},
    sharepointIds: {type: 'graph.sharepointIds'},
    siteId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ItemReference>;
//#endregion