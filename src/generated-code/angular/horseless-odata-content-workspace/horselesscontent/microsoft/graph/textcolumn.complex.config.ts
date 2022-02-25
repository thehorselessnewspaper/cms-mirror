//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TextColumn } from './textcolumn.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TextColumnComplexConfig = {
  name: 'textColumn',
  fields: {
    allowMultipleLines: {type: 'Edm.Boolean'},
    appendChangesToExistingText: {type: 'Edm.Boolean'},
    linesForEditing: {type: 'Edm.Int32'},
    maxLength: {type: 'Edm.Int32'},
    textType: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TextColumn>;
//#endregion