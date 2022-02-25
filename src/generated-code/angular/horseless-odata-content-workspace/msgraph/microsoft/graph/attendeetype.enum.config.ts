//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AttendeeType } from './attendeetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const AttendeeTypeConfig = {
  name: 'attendeeType',
  members: AttendeeType,
  fields: {
    required: {value: 0},
    optional: {value: 1},
    resource: {value: 2}
  }
} as EnumTypeConfig<AttendeeType>;
//#endregion