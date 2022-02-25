//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IncompleteData } from './incompletedata.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IncompleteDataComplexConfig = {
  name: 'incompleteData',
  open: true,
  fields: {
    missingDataBeforeDateTime: {type: 'Edm.DateTimeOffset'},
    wasThrottled: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<IncompleteData>;
//#endregion