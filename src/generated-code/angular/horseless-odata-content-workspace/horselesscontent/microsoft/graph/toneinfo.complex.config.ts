//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ToneInfo } from './toneinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ToneInfoComplexConfig = {
  name: 'toneInfo',
  fields: {
    sequenceId: {type: 'Edm.Int64', nullable: false},
    tone: {type: 'graph.tone', nullable: false}
  }
} as StructuredTypeConfig<ToneInfo>;
//#endregion