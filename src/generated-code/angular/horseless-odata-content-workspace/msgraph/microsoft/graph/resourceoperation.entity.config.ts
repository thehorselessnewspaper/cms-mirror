//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ResourceOperation } from './resourceoperation.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ResourceOperationEntityConfig = {
  name: 'resourceOperation',
  base: 'microsoft.graph.entity',
  fields: {
    resourceName: {type: 'Edm.String'},
    actionName: {type: 'Edm.String'},
    description: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ResourceOperation>;
//#endregion