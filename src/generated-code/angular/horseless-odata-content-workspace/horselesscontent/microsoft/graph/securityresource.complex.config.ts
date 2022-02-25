//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SecurityResource } from './securityresource.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SecurityResourceComplexConfig = {
  name: 'securityResource',
  fields: {
    resource: {type: 'Edm.String'},
    resourceType: {type: 'graph.securityResourceType'}
  }
} as StructuredTypeConfig<SecurityResource>;
//#endregion