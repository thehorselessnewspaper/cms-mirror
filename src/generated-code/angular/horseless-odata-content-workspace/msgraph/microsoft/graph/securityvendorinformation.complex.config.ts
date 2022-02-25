//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SecurityVendorInformation } from './securityvendorinformation.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SecurityVendorInformationComplexConfig = {
  name: 'securityVendorInformation',
  fields: {
    provider: {type: 'Edm.String'},
    providerVersion: {type: 'Edm.String'},
    subProvider: {type: 'Edm.String'},
    vendor: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SecurityVendorInformation>;
//#endregion