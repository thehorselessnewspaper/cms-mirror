//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { StandardTimeZoneOffset } from './standardtimezoneoffset.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const StandardTimeZoneOffsetComplexConfig = {
  name: 'standardTimeZoneOffset',
  fields: {
    time: {type: 'Edm.TimeOfDay'},
    dayOccurrence: {type: 'Edm.Int32'},
    dayOfWeek: {type: 'graph.dayOfWeek'},
    month: {type: 'Edm.Int32'},
    year: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<StandardTimeZoneOffset>;
//#endregion