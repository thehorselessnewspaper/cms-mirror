//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { KeyValuePair } from './keyvaluepair.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const KeyValuePairComplexConfig = {
  name: 'keyValuePair',
  fields: {
    name: {type: 'Edm.String', nullable: false},
    value: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<KeyValuePair>;
//#endregion