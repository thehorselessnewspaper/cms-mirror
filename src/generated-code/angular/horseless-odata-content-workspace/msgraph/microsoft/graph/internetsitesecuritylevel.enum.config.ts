//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InternetSiteSecurityLevel } from './internetsitesecuritylevel.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const InternetSiteSecurityLevelConfig = {
  name: 'internetSiteSecurityLevel',
  members: InternetSiteSecurityLevel,
  fields: {
    userDefined: {value: 0},
    medium: {value: 1},
    mediumHigh: {value: 2},
    high: {value: 3}
  }
} as EnumTypeConfig<InternetSiteSecurityLevel>;
//#endregion