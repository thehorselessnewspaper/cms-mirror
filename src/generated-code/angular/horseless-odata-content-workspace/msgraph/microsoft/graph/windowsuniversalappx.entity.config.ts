//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsUniversalAppX } from './windowsuniversalappx.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsUniversalAppXEntityConfig = {
  name: 'windowsUniversalAppX',
  base: 'microsoft.graph.mobileLobApp',
  fields: {
    applicableArchitectures: {type: 'graph.windowsArchitecture', nullable: false},
    applicableDeviceTypes: {type: 'graph.windowsDeviceType', nullable: false},
    identityName: {type: 'Edm.String'},
    identityPublisherHash: {type: 'Edm.String', nullable: false},
    identityResourceIdentifier: {type: 'Edm.String'},
    isBundle: {type: 'Edm.Boolean', nullable: false},
    minimumSupportedOperatingSystem: {type: 'graph.windowsMinimumOperatingSystem', nullable: false},
    identityVersion: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsUniversalAppX>;
//#endregion