//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ResourceReference } from './resourcereference.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ResourceReferenceComplexConfig = {
  name: 'resourceReference',
  fields: {
    webUrl: {type: 'Edm.String'},
    id: {type: 'Edm.String'},
    type: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ResourceReference>;
//#endregion