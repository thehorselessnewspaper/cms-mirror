//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Deleted } from './deleted.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeletedComplexConfig = {
  name: 'deleted',
  fields: {
    state: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Deleted>;
//#endregion