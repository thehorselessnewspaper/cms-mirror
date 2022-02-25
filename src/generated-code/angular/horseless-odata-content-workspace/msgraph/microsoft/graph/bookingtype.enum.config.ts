//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { BookingType } from './bookingtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const BookingTypeConfig = {
  name: 'bookingType',
  members: BookingType,
  fields: {
    unknown: {value: 0},
    standard: {value: 1},
    reserved: {value: 2}
  }
} as EnumTypeConfig<BookingType>;
//#endregion