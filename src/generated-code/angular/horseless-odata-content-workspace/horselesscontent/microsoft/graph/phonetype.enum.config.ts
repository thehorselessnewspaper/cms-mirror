//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PhoneType } from './phonetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const PhoneTypeConfig = {
  name: 'phoneType',
  members: PhoneType,
  fields: {
    home: {value: 0},
    business: {value: 1},
    mobile: {value: 2},
    other: {value: 3},
    assistant: {value: 4},
    homeFax: {value: 5},
    businessFax: {value: 6},
    otherFax: {value: 7},
    pager: {value: 8},
    radio: {value: 9}
  }
} as EnumTypeConfig<PhoneType>;
//#endregion