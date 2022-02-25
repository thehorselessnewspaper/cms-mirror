//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EdgeCookiePolicy } from './edgecookiepolicy.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const EdgeCookiePolicyConfig = {
  name: 'edgeCookiePolicy',
  members: EdgeCookiePolicy,
  fields: {
    userDefined: {value: 0},
    allow: {value: 1},
    blockThirdParty: {value: 2},
    blockAll: {value: 3}
  }
} as EnumTypeConfig<EdgeCookiePolicy>;
//#endregion