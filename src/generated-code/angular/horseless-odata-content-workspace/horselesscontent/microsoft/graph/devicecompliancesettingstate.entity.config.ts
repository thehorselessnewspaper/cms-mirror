//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceComplianceSettingState } from './devicecompliancesettingstate.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceComplianceSettingStateEntityConfig = {
  name: 'deviceComplianceSettingState',
  base: 'microsoft.graph.entity',
  fields: {
    setting: {type: 'Edm.String'},
    settingName: {type: 'Edm.String'},
    deviceId: {type: 'Edm.String'},
    deviceName: {type: 'Edm.String'},
    userId: {type: 'Edm.String'},
    userEmail: {type: 'Edm.String'},
    userName: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'},
    deviceModel: {type: 'Edm.String'},
    state: {type: 'graph.complianceStatus', nullable: false},
    complianceGracePeriodExpirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as StructuredTypeConfig<DeviceComplianceSettingState>;
//#endregion