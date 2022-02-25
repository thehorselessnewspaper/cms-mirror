//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EducationExternalSource } from './educationexternalsource.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const EducationExternalSourceConfig = {
  name: 'educationExternalSource',
  members: EducationExternalSource,
  fields: {
    sis: {value: 0},
    manual: {value: 1},
    unknownFutureValue: {value: 2}
  }
} as EnumTypeConfig<EducationExternalSource>;
//#endregion