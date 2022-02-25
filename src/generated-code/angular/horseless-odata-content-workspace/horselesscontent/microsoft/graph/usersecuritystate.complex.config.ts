//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UserSecurityState } from './usersecuritystate.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const UserSecurityStateComplexConfig = {
  name: 'userSecurityState',
  fields: {
    aadUserId: {type: 'Edm.String'},
    accountName: {type: 'Edm.String'},
    domainName: {type: 'Edm.String'},
    emailRole: {type: 'graph.emailRole'},
    isVpn: {type: 'Edm.Boolean'},
    logonDateTime: {type: 'Edm.DateTimeOffset'},
    logonId: {type: 'Edm.String'},
    logonIp: {type: 'Edm.String'},
    logonLocation: {type: 'Edm.String'},
    logonType: {type: 'graph.logonType'},
    onPremisesSecurityIdentifier: {type: 'Edm.String'},
    riskScore: {type: 'Edm.String'},
    userAccountType: {type: 'graph.userAccountSecurityType'},
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<UserSecurityState>;
//#endregion