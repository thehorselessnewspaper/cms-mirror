//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { VppTokenAccountType } from './vpptokenaccounttype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const VppTokenAccountTypeConfig = {
  name: 'vppTokenAccountType',
  members: VppTokenAccountType,
  fields: {
    business: {value: 0},
    education: {value: 1}
  }
} as EnumTypeConfig<VppTokenAccountType>;
//#endregion