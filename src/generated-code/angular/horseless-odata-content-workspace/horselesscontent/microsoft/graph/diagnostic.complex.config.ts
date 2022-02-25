//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Diagnostic } from './diagnostic.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DiagnosticComplexConfig = {
  name: 'diagnostic',
  fields: {
    message: {type: 'Edm.String'},
    url: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Diagnostic>;
//#endregion