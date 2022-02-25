//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SharepointIds } from './sharepointids.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SharepointIdsComplexConfig = {
  name: 'sharepointIds',
  fields: {
    listId: {type: 'Edm.String'},
    listItemId: {type: 'Edm.String'},
    listItemUniqueId: {type: 'Edm.String'},
    siteId: {type: 'Edm.String'},
    siteUrl: {type: 'Edm.String'},
    tenantId: {type: 'Edm.String'},
    webId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SharepointIds>;
//#endregion