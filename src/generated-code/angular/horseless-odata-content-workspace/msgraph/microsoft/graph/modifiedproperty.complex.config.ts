//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ModifiedProperty } from './modifiedproperty.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ModifiedPropertyComplexConfig = {
  name: 'modifiedProperty',
  fields: {
    displayName: {type: 'Edm.String'},
    oldValue: {type: 'Edm.String'},
    newValue: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ModifiedProperty>;
//#endregion