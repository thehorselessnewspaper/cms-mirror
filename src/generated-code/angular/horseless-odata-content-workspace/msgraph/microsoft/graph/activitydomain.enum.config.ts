//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ActivityDomain } from './activitydomain.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ActivityDomainConfig = {
  name: 'activityDomain',
  members: ActivityDomain,
  fields: {
    unknown: {value: 0},
    work: {value: 1},
    personal: {value: 2},
    unrestricted: {value: 3}
  }
} as EnumTypeConfig<ActivityDomain>;
//#endregion