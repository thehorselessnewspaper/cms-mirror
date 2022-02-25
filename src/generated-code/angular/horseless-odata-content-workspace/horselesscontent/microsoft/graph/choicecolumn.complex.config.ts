//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChoiceColumn } from './choicecolumn.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ChoiceColumnComplexConfig = {
  name: 'choiceColumn',
  fields: {
    allowTextEntry: {type: 'Edm.Boolean'},
    choices: {type: 'Edm.String', collection: true},
    displayAs: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ChoiceColumn>;
//#endregion