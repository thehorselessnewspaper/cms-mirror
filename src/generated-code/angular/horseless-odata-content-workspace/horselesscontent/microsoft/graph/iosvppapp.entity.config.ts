//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosVppApp } from './iosvppapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosVppAppEntityConfig = {
  name: 'iosVppApp',
  base: 'microsoft.graph.mobileApp',
  fields: {
    usedLicenseCount: {type: 'Edm.Int32', nullable: false},
    totalLicenseCount: {type: 'Edm.Int32', nullable: false},
    releaseDateTime: {type: 'Edm.DateTimeOffset'},
    appStoreUrl: {type: 'Edm.String'},
    licensingType: {type: 'graph.vppLicensingType'},
    applicableDeviceType: {type: 'graph.iosDeviceType'},
    vppTokenOrganizationName: {type: 'Edm.String'},
    vppTokenAccountType: {type: 'graph.vppTokenAccountType', nullable: false},
    vppTokenAppleId: {type: 'Edm.String'},
    bundleId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<IosVppApp>;
//#endregion