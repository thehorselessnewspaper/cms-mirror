//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PhysicalAddressType } from './physicaladdresstype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const PhysicalAddressTypeConfig = {
  name: 'physicalAddressType',
  members: PhysicalAddressType,
  fields: {
    unknown: {value: 0},
    home: {value: 1},
    business: {value: 2},
    other: {value: 3}
  }
} as EnumTypeConfig<PhysicalAddressType>;
//#endregion