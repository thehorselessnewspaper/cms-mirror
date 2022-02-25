//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosUpdatesInstallStatus } from './iosupdatesinstallstatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const IosUpdatesInstallStatusConfig = {
  name: 'iosUpdatesInstallStatus',
  members: IosUpdatesInstallStatus,
  fields: {
    success: {value: 0},
    available: {value: 1},
    idle: {value: 2},
    unknown: {value: 3},
    downloading: {value: -2016330712},
    downloadFailed: {value: -2016330711},
    downloadRequiresComputer: {value: -2016330710},
    downloadInsufficientSpace: {value: -2016330709},
    downloadInsufficientPower: {value: -2016330708},
    downloadInsufficientNetwork: {value: -2016330707},
    installing: {value: -2016330706},
    installInsufficientSpace: {value: -2016330705},
    installInsufficientPower: {value: -2016330704},
    installPhoneCallInProgress: {value: -2016330703},
    installFailed: {value: -2016330702},
    notSupportedOperation: {value: -2016330701},
    sharedDeviceUserLoggedInError: {value: -2016330699},
    deviceOsHigherThanDesiredOsVersion: {value: -2016330696}
  }
} as EnumTypeConfig<IosUpdatesInstallStatus>;
//#endregion