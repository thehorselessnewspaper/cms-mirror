//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SiteSecurityLevel } from './sitesecuritylevel.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const SiteSecurityLevelConfig = {
  name: 'siteSecurityLevel',
  members: SiteSecurityLevel,
  fields: {
    userDefined: {value: 0},
    low: {value: 1},
    mediumLow: {value: 2},
    medium: {value: 3},
    mediumHigh: {value: 4},
    high: {value: 5}
  }
} as EnumTypeConfig<SiteSecurityLevel>;
//#endregion