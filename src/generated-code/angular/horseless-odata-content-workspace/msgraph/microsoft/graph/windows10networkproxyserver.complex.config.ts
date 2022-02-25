//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Windows10NetworkProxyServer } from './windows10networkproxyserver.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const Windows10NetworkProxyServerComplexConfig = {
  name: 'windows10NetworkProxyServer',
  fields: {
    address: {type: 'Edm.String', nullable: false},
    exceptions: {type: 'Edm.String', collection: true},
    useForLocalAddresses: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<Windows10NetworkProxyServer>;
//#endregion