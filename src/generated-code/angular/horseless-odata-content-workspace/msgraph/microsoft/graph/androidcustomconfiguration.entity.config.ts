//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AndroidCustomConfiguration } from './androidcustomconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AndroidCustomConfigurationEntityConfig = {
  name: 'androidCustomConfiguration',
  base: 'microsoft.graph.deviceConfiguration',
  fields: {
    omaSettings: {type: 'graph.omaSetting', collection: true}
  }
} as StructuredTypeConfig<AndroidCustomConfiguration>;
//#endregion