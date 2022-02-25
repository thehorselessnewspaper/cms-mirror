//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MicrosoftStoreForBusinessApp } from './microsoftstoreforbusinessapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MicrosoftStoreForBusinessAppEntityConfig = {
  name: 'microsoftStoreForBusinessApp',
  base: 'microsoft.graph.mobileApp',
  fields: {
    usedLicenseCount: {type: 'Edm.Int32', nullable: false},
    totalLicenseCount: {type: 'Edm.Int32', nullable: false},
    productKey: {type: 'Edm.String'},
    licenseType: {type: 'graph.microsoftStoreForBusinessLicenseType', nullable: false},
    packageIdentityName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<MicrosoftStoreForBusinessApp>;
//#endregion