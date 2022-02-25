//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EducationTerm } from './educationterm.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EducationTermComplexConfig = {
  name: 'educationTerm',
  fields: {
    externalId: {type: 'Edm.String'},
    startDate: {type: 'Edm.Date'},
    endDate: {type: 'Edm.Date'},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<EducationTerm>;
//#endregion