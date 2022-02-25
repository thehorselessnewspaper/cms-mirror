//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AttendeeBase } from './attendeebase.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AttendeeBaseComplexConfig = {
  name: 'attendeeBase',
  base: 'microsoft.graph.recipient',
  fields: {
    type: {type: 'graph.attendeeType'}
  }
} as StructuredTypeConfig<AttendeeBase>;
//#endregion