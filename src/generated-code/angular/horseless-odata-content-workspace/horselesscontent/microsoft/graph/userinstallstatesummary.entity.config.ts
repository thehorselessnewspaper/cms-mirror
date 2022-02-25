//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UserInstallStateSummary } from './userinstallstatesummary.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const UserInstallStateSummaryEntityConfig = {
  name: 'userInstallStateSummary',
  base: 'microsoft.graph.entity',
  fields: {
    userName: {type: 'Edm.String'},
    installedDeviceCount: {type: 'Edm.Int32', nullable: false},
    failedDeviceCount: {type: 'Edm.Int32', nullable: false},
    notInstalledDeviceCount: {type: 'Edm.Int32', nullable: false},
    deviceStates: {type: 'graph.deviceInstallState', collection: true, navigation: true}
  }
} as StructuredTypeConfig<UserInstallStateSummary>;
//#endregion