//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PersonType } from './persontype.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PersonTypeComplexConfig = {
  name: 'personType',
  fields: {
    class: {type: 'Edm.String'},
    subclass: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PersonType>;
//#endregion