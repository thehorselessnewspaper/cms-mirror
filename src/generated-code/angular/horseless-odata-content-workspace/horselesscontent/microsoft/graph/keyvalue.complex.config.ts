//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { KeyValue } from './keyvalue.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const KeyValueComplexConfig = {
  name: 'keyValue',
  fields: {
    key: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<KeyValue>;
//#endregion