//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FirewallCertificateRevocationListCheckMethodType } from './firewallcertificaterevocationlistcheckmethodtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const FirewallCertificateRevocationListCheckMethodTypeConfig = {
  name: 'firewallCertificateRevocationListCheckMethodType',
  members: FirewallCertificateRevocationListCheckMethodType,
  fields: {
    deviceDefault: {value: 0},
    none: {value: 1},
    attempt: {value: 2},
    require: {value: 3}
  }
} as EnumTypeConfig<FirewallCertificateRevocationListCheckMethodType>;
//#endregion