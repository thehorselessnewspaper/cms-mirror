//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SettingValue } from './settingvalue.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SettingValueComplexConfig = {
  name: 'settingValue',
  fields: {
    name: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SettingValue>;
//#endregion