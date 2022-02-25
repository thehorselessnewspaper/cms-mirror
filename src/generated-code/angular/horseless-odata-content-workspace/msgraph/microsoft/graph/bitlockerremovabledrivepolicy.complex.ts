//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { BitLockerEncryptionMethod } from './bitlockerencryptionmethod.enum';
//#endregion

export interface BitLockerRemovableDrivePolicy {
  //#region ODataApiGen Properties
  encryptionMethod?: BitLockerEncryptionMethod;
  requireEncryptionForWriteAccess: boolean;
  blockCrossOrganizationWriteAccess: boolean;
  //#endregion
}