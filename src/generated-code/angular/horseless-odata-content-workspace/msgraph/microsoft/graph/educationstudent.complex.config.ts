//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EducationStudent } from './educationstudent.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EducationStudentComplexConfig = {
  name: 'educationStudent',
  fields: {
    graduationYear: {type: 'Edm.String'},
    grade: {type: 'Edm.String'},
    birthDate: {type: 'Edm.Date'},
    gender: {type: 'graph.educationGender'},
    studentNumber: {type: 'Edm.String'},
    externalId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<EducationStudent>;
//#endregion