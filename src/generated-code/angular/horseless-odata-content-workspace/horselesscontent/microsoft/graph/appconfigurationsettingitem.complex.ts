//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MdmAppConfigKeyType } from './mdmappconfigkeytype.enum';
//#endregion

export interface AppConfigurationSettingItem {
  //#region ODataApiGen Properties
  appConfigKey: string;
  appConfigKeyType: MdmAppConfigKeyType;
  appConfigKeyValue: string;
  //#endregion
}