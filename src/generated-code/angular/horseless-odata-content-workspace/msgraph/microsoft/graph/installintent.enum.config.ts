//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InstallIntent } from './installintent.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const InstallIntentConfig = {
  name: 'installIntent',
  members: InstallIntent,
  fields: {
    available: {value: 0},
    required: {value: 1},
    uninstall: {value: 2},
    availableWithoutEnrollment: {value: 3}
  }
} as EnumTypeConfig<InstallIntent>;
//#endregion