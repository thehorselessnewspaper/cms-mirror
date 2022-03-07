//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ACEPermissionType } from './acepermissiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ACEPermissionTypeConfig = {
  name: 'ACEPermissionType',
  members: ACEPermissionType,
  fields: {
    PERMIT: {value: 0},
    DENY: {value: 1}
  }
} as EnumTypeConfig<ACEPermissionType>;
//#endregion