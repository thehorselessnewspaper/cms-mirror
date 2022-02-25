//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UserAgent } from './useragent.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const UserAgentComplexConfig = {
  name: 'userAgent',
  fields: {
    headerValue: {type: 'Edm.String'},
    applicationVersion: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<UserAgent>;
//#endregion