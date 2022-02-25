//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RequiredResourceAccess } from './requiredresourceaccess.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RequiredResourceAccessComplexConfig = {
  name: 'requiredResourceAccess',
  fields: {
    resourceAppId: {type: 'Edm.String', nullable: false},
    resourceAccess: {type: 'graph.resourceAccess', nullable: false, collection: true}
  }
} as StructuredTypeConfig<RequiredResourceAccess>;
//#endregion