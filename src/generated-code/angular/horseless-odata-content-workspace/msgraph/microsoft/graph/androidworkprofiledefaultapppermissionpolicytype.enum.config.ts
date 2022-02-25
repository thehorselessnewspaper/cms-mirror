//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AndroidWorkProfileDefaultAppPermissionPolicyType } from './androidworkprofiledefaultapppermissionpolicytype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const AndroidWorkProfileDefaultAppPermissionPolicyTypeConfig = {
  name: 'androidWorkProfileDefaultAppPermissionPolicyType',
  members: AndroidWorkProfileDefaultAppPermissionPolicyType,
  fields: {
    deviceDefault: {value: 0},
    prompt: {value: 1},
    autoGrant: {value: 2},
    autoDeny: {value: 3}
  }
} as EnumTypeConfig<AndroidWorkProfileDefaultAppPermissionPolicyType>;
//#endregion