//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EducationUserRole } from './educationuserrole.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const EducationUserRoleConfig = {
  name: 'educationUserRole',
  members: EducationUserRole,
  fields: {
    student: {value: 0},
    teacher: {value: 1},
    none: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<EducationUserRole>;
//#endregion