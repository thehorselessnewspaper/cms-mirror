//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ApplicationGuardBlockClipboardSharingType } from './applicationguardblockclipboardsharingtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ApplicationGuardBlockClipboardSharingTypeConfig = {
  name: 'applicationGuardBlockClipboardSharingType',
  members: ApplicationGuardBlockClipboardSharingType,
  fields: {
    notConfigured: {value: 0},
    blockBoth: {value: 1},
    blockHostToContainer: {value: 2},
    blockContainerToHost: {value: 3},
    blockNone: {value: 4}
  }
} as EnumTypeConfig<ApplicationGuardBlockClipboardSharingType>;
//#endregion