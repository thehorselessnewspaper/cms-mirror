//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppClipboardSharingLevel } from './managedappclipboardsharinglevel.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ManagedAppClipboardSharingLevelConfig = {
  name: 'managedAppClipboardSharingLevel',
  members: ManagedAppClipboardSharingLevel,
  fields: {
    allApps: {value: 0},
    managedAppsWithPasteIn: {value: 1},
    managedApps: {value: 2},
    blocked: {value: 3}
  }
} as EnumTypeConfig<ManagedAppClipboardSharingLevel>;
//#endregion