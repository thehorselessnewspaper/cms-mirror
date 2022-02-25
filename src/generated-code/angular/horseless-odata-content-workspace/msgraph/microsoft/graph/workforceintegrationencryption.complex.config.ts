//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkforceIntegrationEncryption } from './workforceintegrationencryption.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkforceIntegrationEncryptionComplexConfig = {
  name: 'workforceIntegrationEncryption',
  fields: {
    protocol: {type: 'graph.workforceIntegrationEncryptionProtocol'},
    secret: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WorkforceIntegrationEncryption>;
//#endregion