//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosNotificationAlertType } from './iosnotificationalerttype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const IosNotificationAlertTypeConfig = {
  name: 'iosNotificationAlertType',
  members: IosNotificationAlertType,
  fields: {
    deviceDefault: {value: 0},
    banner: {value: 1},
    modal: {value: 2},
    none: {value: 3}
  }
} as EnumTypeConfig<IosNotificationAlertType>;
//#endregion