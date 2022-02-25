//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Windows10EditionType } from './windows10editiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const Windows10EditionTypeConfig = {
  name: 'windows10EditionType',
  members: Windows10EditionType,
  fields: {
    windows10Enterprise: {value: 0},
    windows10EnterpriseN: {value: 1},
    windows10Education: {value: 2},
    windows10EducationN: {value: 3},
    windows10MobileEnterprise: {value: 4},
    windows10HolographicEnterprise: {value: 5},
    windows10Professional: {value: 6},
    windows10ProfessionalN: {value: 7},
    windows10ProfessionalEducation: {value: 8},
    windows10ProfessionalEducationN: {value: 9},
    windows10ProfessionalWorkstation: {value: 10},
    windows10ProfessionalWorkstationN: {value: 11}
  }
} as EnumTypeConfig<Windows10EditionType>;
//#endregion