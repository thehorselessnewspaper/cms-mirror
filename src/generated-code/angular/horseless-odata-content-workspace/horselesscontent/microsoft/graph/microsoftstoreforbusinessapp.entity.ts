//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileApp } from './mobileapp.entity';
import { MicrosoftStoreForBusinessLicenseType } from './microsoftstoreforbusinesslicensetype.enum';
//#endregion

export interface MicrosoftStoreForBusinessApp extends MobileApp {
  //#region ODataApiGen Properties
  usedLicenseCount: number;
  totalLicenseCount: number;
  productKey?: string;
  licenseType: MicrosoftStoreForBusinessLicenseType;
  packageIdentityName?: string;
  //#endregion
}