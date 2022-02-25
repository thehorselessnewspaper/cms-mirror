//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EducationTeacher } from './educationteacher.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EducationTeacherComplexConfig = {
  name: 'educationTeacher',
  fields: {
    teacherNumber: {type: 'Edm.String'},
    externalId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<EducationTeacher>;
//#endregion