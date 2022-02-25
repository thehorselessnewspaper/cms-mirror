//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteUserRole } from './onenoteuserrole.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const OnenoteUserRoleConfig = {
  name: 'onenoteUserRole',
  members: OnenoteUserRole,
  fields: {
    Owner: {value: 0},
    Contributor: {value: 1},
    Reader: {value: 2},
    None: {value: -1}
  }
} as EnumTypeConfig<OnenoteUserRole>;
//#endregion