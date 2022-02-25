//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RegistryOperation } from './registryoperation.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RegistryOperationConfig = {
  name: 'registryOperation',
  members: RegistryOperation,
  fields: {
    unknown: {value: 0},
    create: {value: 1},
    modify: {value: 2},
    delete: {value: 3},
    unknownFutureValue: {value: 127}
  }
} as EnumTypeConfig<RegistryOperation>;
//#endregion