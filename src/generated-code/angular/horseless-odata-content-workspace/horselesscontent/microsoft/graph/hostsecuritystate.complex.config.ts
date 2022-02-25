//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { HostSecurityState } from './hostsecuritystate.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const HostSecurityStateComplexConfig = {
  name: 'hostSecurityState',
  fields: {
    fqdn: {type: 'Edm.String'},
    isAzureAdJoined: {type: 'Edm.Boolean'},
    isAzureAdRegistered: {type: 'Edm.Boolean'},
    isHybridAzureDomainJoined: {type: 'Edm.Boolean'},
    netBiosName: {type: 'Edm.String'},
    os: {type: 'Edm.String'},
    privateIpAddress: {type: 'Edm.String'},
    publicIpAddress: {type: 'Edm.String'},
    riskScore: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<HostSecurityState>;
//#endregion