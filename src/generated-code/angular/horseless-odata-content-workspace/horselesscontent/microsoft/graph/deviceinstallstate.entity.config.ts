//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceInstallState } from './deviceinstallstate.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceInstallStateEntityConfig = {
  name: 'deviceInstallState',
  base: 'microsoft.graph.entity',
  fields: {
    deviceName: {type: 'Edm.String'},
    deviceId: {type: 'Edm.String'},
    lastSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    installState: {type: 'graph.installState', nullable: false},
    errorCode: {type: 'Edm.String'},
    osVersion: {type: 'Edm.String'},
    osDescription: {type: 'Edm.String'},
    userName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceInstallState>;
//#endregion