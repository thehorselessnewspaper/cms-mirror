//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AlertTrigger } from './alerttrigger.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AlertTriggerComplexConfig = {
  name: 'alertTrigger',
  fields: {
    name: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AlertTrigger>;
//#endregion