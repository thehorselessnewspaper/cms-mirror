//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { BitLockerRemovableDrivePolicy } from './bitlockerremovabledrivepolicy.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const BitLockerRemovableDrivePolicyComplexConfig = {
  name: 'bitLockerRemovableDrivePolicy',
  fields: {
    encryptionMethod: {type: 'graph.bitLockerEncryptionMethod'},
    requireEncryptionForWriteAccess: {type: 'Edm.Boolean', nullable: false},
    blockCrossOrganizationWriteAccess: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<BitLockerRemovableDrivePolicy>;
//#endregion