//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ResourceAccess } from './resourceaccess.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ResourceAccessComplexConfig = {
  name: 'resourceAccess',
  fields: {
    id: {type: 'Edm.Guid', nullable: false},
    type: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ResourceAccess>;
//#endregion