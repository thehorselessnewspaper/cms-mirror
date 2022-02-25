//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosStoreApp } from './iosstoreapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosStoreAppEntityConfig = {
  name: 'iosStoreApp',
  base: 'microsoft.graph.mobileApp',
  fields: {
    bundleId: {type: 'Edm.String'},
    appStoreUrl: {type: 'Edm.String'},
    applicableDeviceType: {type: 'graph.iosDeviceType', nullable: false},
    minimumSupportedOperatingSystem: {type: 'graph.iosMinimumOperatingSystem'}
  }
} as StructuredTypeConfig<IosStoreApp>;
//#endregion