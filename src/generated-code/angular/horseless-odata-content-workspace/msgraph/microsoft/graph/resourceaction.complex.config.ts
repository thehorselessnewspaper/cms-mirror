//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ResourceAction } from './resourceaction.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ResourceActionComplexConfig = {
  name: 'resourceAction',
  fields: {
    allowedResourceActions: {type: 'Edm.String', collection: true},
    notAllowedResourceActions: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<ResourceAction>;
//#endregion