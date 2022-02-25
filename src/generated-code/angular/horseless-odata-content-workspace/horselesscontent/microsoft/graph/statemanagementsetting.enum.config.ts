//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { StateManagementSetting } from './statemanagementsetting.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const StateManagementSettingConfig = {
  name: 'stateManagementSetting',
  members: StateManagementSetting,
  fields: {
    notConfigured: {value: 0},
    blocked: {value: 1},
    allowed: {value: 2}
  }
} as EnumTypeConfig<StateManagementSetting>;
//#endregion