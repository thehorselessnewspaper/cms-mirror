//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EducationGender } from './educationgender.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const EducationGenderConfig = {
  name: 'educationGender',
  members: EducationGender,
  fields: {
    female: {value: 0},
    male: {value: 1},
    other: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<EducationGender>;
//#endregion