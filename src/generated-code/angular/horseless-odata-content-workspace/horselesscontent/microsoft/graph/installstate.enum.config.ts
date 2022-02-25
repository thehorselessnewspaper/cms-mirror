//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InstallState } from './installstate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const InstallStateConfig = {
  name: 'installState',
  members: InstallState,
  fields: {
    notApplicable: {value: 0},
    installed: {value: 1},
    failed: {value: 2},
    notInstalled: {value: 3},
    uninstallFailed: {value: 4},
    unknown: {value: 5}
  }
} as EnumTypeConfig<InstallState>;
//#endregion