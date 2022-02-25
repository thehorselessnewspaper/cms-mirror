//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InformationalUrl } from './informationalurl.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const InformationalUrlComplexConfig = {
  name: 'informationalUrl',
  fields: {
    logoUrl: {type: 'Edm.String'},
    marketingUrl: {type: 'Edm.String'},
    privacyStatementUrl: {type: 'Edm.String'},
    supportUrl: {type: 'Edm.String'},
    termsOfServiceUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<InformationalUrl>;
//#endregion