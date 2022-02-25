//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LookupColumn } from './lookupcolumn.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LookupColumnComplexConfig = {
  name: 'lookupColumn',
  fields: {
    allowMultipleValues: {type: 'Edm.Boolean'},
    allowUnlimitedLength: {type: 'Edm.Boolean'},
    columnName: {type: 'Edm.String'},
    listId: {type: 'Edm.String'},
    primaryLookupColumnId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<LookupColumn>;
//#endregion