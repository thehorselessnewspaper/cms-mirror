//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EmailRole } from './emailrole.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const EmailRoleConfig = {
  name: 'emailRole',
  members: EmailRole,
  fields: {
    unknown: {value: 0},
    sender: {value: 1},
    recipient: {value: 2},
    unknownFutureValue: {value: 127}
  }
} as EnumTypeConfig<EmailRole>;
//#endregion