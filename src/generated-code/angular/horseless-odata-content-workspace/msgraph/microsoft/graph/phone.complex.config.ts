//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Phone } from './phone.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PhoneComplexConfig = {
  name: 'phone',
  fields: {
    type: {type: 'graph.phoneType'},
    number: {type: 'Edm.String'},
    region: {type: 'Edm.String'},
    language: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Phone>;
//#endregion