//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PolicyPlatformType } from './policyplatformtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const PolicyPlatformTypeConfig = {
  name: 'policyPlatformType',
  members: PolicyPlatformType,
  fields: {
    android: {value: 0},
    iOS: {value: 2},
    macOS: {value: 3},
    windowsPhone81: {value: 4},
    windows81AndLater: {value: 5},
    windows10AndLater: {value: 6},
    androidWorkProfile: {value: 7},
    all: {value: 100}
  }
} as EnumTypeConfig<PolicyPlatformType>;
//#endregion