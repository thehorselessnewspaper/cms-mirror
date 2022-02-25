//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsPhone81CustomConfiguration } from './windowsphone81customconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsPhone81CustomConfigurationEntityConfig = {
  name: 'windowsPhone81CustomConfiguration',
  base: 'microsoft.graph.deviceConfiguration',
  fields: {
    omaSettings: {type: 'graph.omaSetting', collection: true}
  }
} as StructuredTypeConfig<WindowsPhone81CustomConfiguration>;
//#endregion