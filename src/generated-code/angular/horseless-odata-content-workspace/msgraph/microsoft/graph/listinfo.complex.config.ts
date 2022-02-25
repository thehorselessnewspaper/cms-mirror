//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ListInfo } from './listinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ListInfoComplexConfig = {
  name: 'listInfo',
  fields: {
    contentTypesEnabled: {type: 'Edm.Boolean'},
    hidden: {type: 'Edm.Boolean'},
    template: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ListInfo>;
//#endregion