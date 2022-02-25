//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InternetMessageHeader } from './internetmessageheader.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const InternetMessageHeaderComplexConfig = {
  name: 'internetMessageHeader',
  fields: {
    name: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<InternetMessageHeader>;
//#endregion