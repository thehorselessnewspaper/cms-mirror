//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { BitLockerEncryptionMethod } from './bitlockerencryptionmethod.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const BitLockerEncryptionMethodConfig = {
  name: 'bitLockerEncryptionMethod',
  members: BitLockerEncryptionMethod,
  fields: {
    aesCbc128: {value: 3},
    aesCbc256: {value: 4},
    xtsAes128: {value: 6},
    xtsAes256: {value: 7}
  }
} as EnumTypeConfig<BitLockerEncryptionMethod>;
//#endregion