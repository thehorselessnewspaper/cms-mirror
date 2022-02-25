//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AndroidWorkProfileCrossProfileDataSharingType } from './androidworkprofilecrossprofiledatasharingtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const AndroidWorkProfileCrossProfileDataSharingTypeConfig = {
  name: 'androidWorkProfileCrossProfileDataSharingType',
  members: AndroidWorkProfileCrossProfileDataSharingType,
  fields: {
    deviceDefault: {value: 0},
    preventAny: {value: 1},
    allowPersonalToWork: {value: 2},
    noRestrictions: {value: 3}
  }
} as EnumTypeConfig<AndroidWorkProfileCrossProfileDataSharingType>;
//#endregion