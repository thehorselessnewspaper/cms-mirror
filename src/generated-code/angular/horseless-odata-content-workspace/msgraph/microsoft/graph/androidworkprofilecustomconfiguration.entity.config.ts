//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AndroidWorkProfileCustomConfiguration } from './androidworkprofilecustomconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AndroidWorkProfileCustomConfigurationEntityConfig = {
  name: 'androidWorkProfileCustomConfiguration',
  base: 'microsoft.graph.deviceConfiguration',
  fields: {
    omaSettings: {type: 'graph.omaSetting', collection: true}
  }
} as StructuredTypeConfig<AndroidWorkProfileCustomConfiguration>;
//#endregion