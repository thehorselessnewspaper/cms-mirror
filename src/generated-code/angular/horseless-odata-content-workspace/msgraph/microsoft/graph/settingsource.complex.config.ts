//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SettingSource } from './settingsource.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SettingSourceComplexConfig = {
  name: 'settingSource',
  fields: {
    id: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SettingSource>;
//#endregion