//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { Windows10EditionType } from './windows10editiontype.enum';
import { EditionUpgradeLicenseType } from './editionupgradelicensetype.enum';
//#endregion

export interface EditionUpgradeConfiguration extends DeviceConfiguration {
  //#region ODataApiGen Properties
  licenseType: EditionUpgradeLicenseType;
  targetEdition: Windows10EditionType;
  license?: string;
  productKey?: string;
  //#endregion
}