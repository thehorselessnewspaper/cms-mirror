//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedIOSLobApp } from './managedioslobapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedIOSLobAppEntityConfig = {
  name: 'managedIOSLobApp',
  base: 'microsoft.graph.managedMobileLobApp',
  fields: {
    bundleId: {type: 'Edm.String'},
    applicableDeviceType: {type: 'graph.iosDeviceType', nullable: false},
    minimumSupportedOperatingSystem: {type: 'graph.iosMinimumOperatingSystem'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    versionNumber: {type: 'Edm.String'},
    buildNumber: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedIOSLobApp>;
//#endregion