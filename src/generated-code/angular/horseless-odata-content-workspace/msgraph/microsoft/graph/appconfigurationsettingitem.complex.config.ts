//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppConfigurationSettingItem } from './appconfigurationsettingitem.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AppConfigurationSettingItemComplexConfig = {
  name: 'appConfigurationSettingItem',
  fields: {
    appConfigKey: {type: 'Edm.String', nullable: false},
    appConfigKeyType: {type: 'graph.mdmAppConfigKeyType', nullable: false},
    appConfigKeyValue: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<AppConfigurationSettingItem>;
//#endregion