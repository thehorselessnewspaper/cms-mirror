//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosMobileAppConfiguration } from './iosmobileappconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosMobileAppConfigurationEntityConfig = {
  name: 'iosMobileAppConfiguration',
  base: 'microsoft.graph.managedDeviceMobileAppConfiguration',
  fields: {
    encodedSettingXml: {type: 'Edm.Binary'},
    settings: {type: 'graph.appConfigurationSettingItem', collection: true}
  }
} as StructuredTypeConfig<IosMobileAppConfiguration>;
//#endregion