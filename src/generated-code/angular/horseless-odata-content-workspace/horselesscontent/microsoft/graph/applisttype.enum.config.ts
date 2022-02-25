//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppListType } from './applisttype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const AppListTypeConfig = {
  name: 'appListType',
  members: AppListType,
  fields: {
    none: {value: 0},
    appsInListCompliant: {value: 1},
    appsNotInListCompliant: {value: 2}
  }
} as EnumTypeConfig<AppListType>;
//#endregion