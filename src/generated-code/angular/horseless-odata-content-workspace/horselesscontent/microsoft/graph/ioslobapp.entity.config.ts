//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosLobApp } from './ioslobapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosLobAppEntityConfig = {
  name: 'iosLobApp',
  base: 'microsoft.graph.mobileLobApp',
  fields: {
    bundleId: {type: 'Edm.String'},
    applicableDeviceType: {type: 'graph.iosDeviceType', nullable: false},
    minimumSupportedOperatingSystem: {type: 'graph.iosMinimumOperatingSystem'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    versionNumber: {type: 'Edm.String'},
    buildNumber: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<IosLobApp>;
//#endregion