//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RegistryValueType } from './registryvaluetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RegistryValueTypeConfig = {
  name: 'registryValueType',
  members: RegistryValueType,
  fields: {
    unknown: {value: 0},
    binary: {value: 1},
    dword: {value: 2},
    dwordLittleEndian: {value: 3},
    dwordBigEndian: {value: 4},
    expandSz: {value: 5},
    link: {value: 6},
    multiSz: {value: 7},
    none: {value: 8},
    qword: {value: 9},
    qwordlittleEndian: {value: 10},
    sz: {value: 11},
    unknownFutureValue: {value: 127}
  }
} as EnumTypeConfig<RegistryValueType>;
//#endregion