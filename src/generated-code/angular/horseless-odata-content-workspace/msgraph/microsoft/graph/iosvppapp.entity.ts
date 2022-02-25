//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileApp } from './mobileapp.entity';
import { VppTokenAccountType } from './vpptokenaccounttype.enum';
import { IosDeviceType } from './iosdevicetype.complex';
import { VppLicensingType } from './vpplicensingtype.complex';
//#endregion

export interface IosVppApp extends MobileApp {
  //#region ODataApiGen Properties
  usedLicenseCount: number;
  totalLicenseCount: number;
  releaseDateTime?: Date;
  appStoreUrl?: string;
  licensingType?: VppLicensingType;
  applicableDeviceType?: IosDeviceType;
  vppTokenOrganizationName?: string;
  vppTokenAccountType: VppTokenAccountType;
  vppTokenAppleId?: string;
  bundleId?: string;
  //#endregion
}