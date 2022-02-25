//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppLockerApplicationControlType } from './applockerapplicationcontroltype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const AppLockerApplicationControlTypeConfig = {
  name: 'appLockerApplicationControlType',
  members: AppLockerApplicationControlType,
  fields: {
    notConfigured: {value: 0},
    enforceComponentsAndStoreApps: {value: 1},
    auditComponentsAndStoreApps: {value: 2},
    enforceComponentsStoreAppsAndSmartlocker: {value: 3},
    auditComponentsStoreAppsAndSmartlocker: {value: 4}
  }
} as EnumTypeConfig<AppLockerApplicationControlType>;
//#endregion