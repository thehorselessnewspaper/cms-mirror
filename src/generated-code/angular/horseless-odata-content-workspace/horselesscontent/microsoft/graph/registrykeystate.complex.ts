//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RegistryHive } from './registryhive.enum';
import { RegistryOperation } from './registryoperation.enum';
import { RegistryValueType } from './registryvaluetype.enum';
//#endregion

export interface RegistryKeyState {
  //#region ODataApiGen Properties
  hive?: RegistryHive;
  key?: string;
  oldKey?: string;
  oldValueData?: string;
  oldValueName?: string;
  operation?: RegistryOperation;
  processId?: number;
  valueData?: string;
  valueName?: string;
  valueType?: RegistryValueType;
  //#endregion
}