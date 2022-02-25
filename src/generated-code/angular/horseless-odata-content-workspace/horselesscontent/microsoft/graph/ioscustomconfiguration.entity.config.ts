//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosCustomConfiguration } from './ioscustomconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosCustomConfigurationEntityConfig = {
  name: 'iosCustomConfiguration',
  base: 'microsoft.graph.deviceConfiguration',
  fields: {
    payloadName: {type: 'Edm.String', nullable: false},
    payloadFileName: {type: 'Edm.String'},
    payload: {type: 'Edm.Binary', nullable: false}
  }
} as StructuredTypeConfig<IosCustomConfiguration>;
//#endregion