//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CloudAppSecurityState } from './cloudappsecuritystate.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CloudAppSecurityStateComplexConfig = {
  name: 'cloudAppSecurityState',
  fields: {
    destinationServiceIp: {type: 'Edm.String'},
    destinationServiceName: {type: 'Edm.String'},
    riskScore: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<CloudAppSecurityState>;
//#endregion