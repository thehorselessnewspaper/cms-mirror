//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DateTimeTimeZone } from './datetimetimezone.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DateTimeTimeZoneComplexConfig = {
  name: 'dateTimeTimeZone',
  fields: {
    dateTime: {type: 'Edm.String', nullable: false},
    timeZone: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DateTimeTimeZone>;
//#endregion