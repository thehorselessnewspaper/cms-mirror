//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TimeZoneInformation } from './timezoneinformation.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TimeZoneInformationComplexConfig = {
  name: 'timeZoneInformation',
  fields: {
    alias: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TimeZoneInformation>;
//#endregion