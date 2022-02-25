//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ApplicationGuardBlockFileTransferType } from './applicationguardblockfiletransfertype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ApplicationGuardBlockFileTransferTypeConfig = {
  name: 'applicationGuardBlockFileTransferType',
  members: ApplicationGuardBlockFileTransferType,
  fields: {
    notConfigured: {value: 0},
    blockImageAndTextFile: {value: 1},
    blockImageFile: {value: 2},
    blockNone: {value: 3},
    blockTextFile: {value: 4}
  }
} as EnumTypeConfig<ApplicationGuardBlockFileTransferType>;
//#endregion