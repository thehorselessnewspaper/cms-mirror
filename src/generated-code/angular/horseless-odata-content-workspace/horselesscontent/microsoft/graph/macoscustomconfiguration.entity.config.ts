//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MacOSCustomConfiguration } from './macoscustomconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MacOSCustomConfigurationEntityConfig = {
  name: 'macOSCustomConfiguration',
  base: 'microsoft.graph.deviceConfiguration',
  fields: {
    payloadName: {type: 'Edm.String', nullable: false},
    payloadFileName: {type: 'Edm.String'},
    payload: {type: 'Edm.Binary', nullable: false}
  }
} as StructuredTypeConfig<MacOSCustomConfiguration>;
//#endregion