//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TimeZoneStandard } from './timezonestandard.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const TimeZoneStandardConfig = {
  name: 'timeZoneStandard',
  members: TimeZoneStandard,
  fields: {
    windows: {value: 0},
    iana: {value: 1}
  }
} as EnumTypeConfig<TimeZoneStandard>;
//#endregion