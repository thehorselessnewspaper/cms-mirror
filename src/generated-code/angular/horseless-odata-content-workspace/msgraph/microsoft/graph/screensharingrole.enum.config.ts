//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScreenSharingRole } from './screensharingrole.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ScreenSharingRoleConfig = {
  name: 'screenSharingRole',
  members: ScreenSharingRole,
  fields: {
    viewer: {value: 0},
    sharer: {value: 1}
  }
} as EnumTypeConfig<ScreenSharingRole>;
//#endregion