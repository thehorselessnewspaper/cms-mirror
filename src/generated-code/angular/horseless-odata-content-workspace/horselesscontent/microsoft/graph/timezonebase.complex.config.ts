//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TimeZoneBase } from './timezonebase.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TimeZoneBaseComplexConfig = {
  name: 'timeZoneBase',
  fields: {
    name: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TimeZoneBase>;
//#endregion