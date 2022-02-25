//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PatternedRecurrence } from './patternedrecurrence.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PatternedRecurrenceComplexConfig = {
  name: 'patternedRecurrence',
  fields: {
    pattern: {type: 'graph.recurrencePattern'},
    range: {type: 'graph.recurrenceRange'}
  }
} as StructuredTypeConfig<PatternedRecurrence>;
//#endregion