//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Windows10CustomConfiguration } from './windows10customconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const Windows10CustomConfigurationEntityConfig = {
  name: 'windows10CustomConfiguration',
  base: 'microsoft.graph.deviceConfiguration',
  fields: {
    omaSettings: {type: 'graph.omaSetting', collection: true}
  }
} as StructuredTypeConfig<Windows10CustomConfiguration>;
//#endregion