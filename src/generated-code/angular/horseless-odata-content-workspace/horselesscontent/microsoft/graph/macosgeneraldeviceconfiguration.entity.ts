//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { AppListType } from './applisttype.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { AppListItem } from './applistitem.complex';
//#endregion

export interface MacOSGeneralDeviceConfiguration extends DeviceConfiguration {
  //#region ODataApiGen Properties
  compliantAppsList?: AppListItem[];
  compliantAppListType: AppListType;
  emailInDomainSuffixes?: string[];
  passwordBlockSimple: boolean;
  passwordExpirationDays?: number;
  passwordMinimumCharacterSetCount?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeLock?: number;
  passwordMinutesOfInactivityBeforeScreenTimeout?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordRequiredType: RequiredPasswordType;
  passwordRequired: boolean;
  //#endregion
}