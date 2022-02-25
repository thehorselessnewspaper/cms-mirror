//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkforceIntegrationEncryptionProtocol } from './workforceintegrationencryptionprotocol.enum';
//#endregion

export interface WorkforceIntegrationEncryption {
  //#region ODataApiGen Properties
  protocol?: WorkforceIntegrationEncryptionProtocol;
  secret?: string;
  //#endregion
}