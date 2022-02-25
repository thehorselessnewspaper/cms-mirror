//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PersonOrGroupColumn } from './personorgroupcolumn.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PersonOrGroupColumnComplexConfig = {
  name: 'personOrGroupColumn',
  fields: {
    allowMultipleSelection: {type: 'Edm.Boolean'},
    chooseFromType: {type: 'Edm.String'},
    displayAs: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PersonOrGroupColumn>;
//#endregion