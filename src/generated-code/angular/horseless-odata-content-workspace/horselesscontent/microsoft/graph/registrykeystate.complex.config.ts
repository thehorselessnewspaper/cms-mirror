//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RegistryKeyState } from './registrykeystate.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RegistryKeyStateComplexConfig = {
  name: 'registryKeyState',
  fields: {
    hive: {type: 'graph.registryHive'},
    key: {type: 'Edm.String'},
    oldKey: {type: 'Edm.String'},
    oldValueData: {type: 'Edm.String'},
    oldValueName: {type: 'Edm.String'},
    operation: {type: 'graph.registryOperation'},
    processId: {type: 'Edm.Int32'},
    valueData: {type: 'Edm.String'},
    valueName: {type: 'Edm.String'},
    valueType: {type: 'graph.registryValueType'}
  }
} as StructuredTypeConfig<RegistryKeyState>;
//#endregion