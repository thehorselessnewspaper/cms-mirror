//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedIOSStoreApp } from './managediosstoreapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedIOSStoreAppEntityConfig = {
  name: 'managedIOSStoreApp',
  base: 'microsoft.graph.managedApp',
  fields: {
    bundleId: {type: 'Edm.String'},
    appStoreUrl: {type: 'Edm.String', nullable: false},
    applicableDeviceType: {type: 'graph.iosDeviceType', nullable: false},
    minimumSupportedOperatingSystem: {type: 'graph.iosMinimumOperatingSystem', nullable: false}
  }
} as StructuredTypeConfig<ManagedIOSStoreApp>;
//#endregion