//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkforceIntegrationEncryptionProtocol } from './workforceintegrationencryptionprotocol.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WorkforceIntegrationEncryptionProtocolConfig = {
  name: 'workforceIntegrationEncryptionProtocol',
  members: WorkforceIntegrationEncryptionProtocol,
  fields: {
    sharedSecret: {value: 0},
    unknownFutureValue: {value: 1}
  }
} as EnumTypeConfig<WorkforceIntegrationEncryptionProtocol>;
//#endregion