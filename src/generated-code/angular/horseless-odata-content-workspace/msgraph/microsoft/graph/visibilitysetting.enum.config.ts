//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { VisibilitySetting } from './visibilitysetting.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const VisibilitySettingConfig = {
  name: 'visibilitySetting',
  members: VisibilitySetting,
  fields: {
    notConfigured: {value: 0},
    hide: {value: 1},
    show: {value: 2}
  }
} as EnumTypeConfig<VisibilitySetting>;
//#endregion