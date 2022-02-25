//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MdmAppConfigKeyType } from './mdmappconfigkeytype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const MdmAppConfigKeyTypeConfig = {
  name: 'mdmAppConfigKeyType',
  members: MdmAppConfigKeyType,
  fields: {
    stringType: {value: 0},
    integerType: {value: 1},
    realType: {value: 2},
    booleanType: {value: 3},
    tokenType: {value: 4}
  }
} as EnumTypeConfig<MdmAppConfigKeyType>;
//#endregion