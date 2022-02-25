//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProcessIntegrityLevel } from './processintegritylevel.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ProcessIntegrityLevelConfig = {
  name: 'processIntegrityLevel',
  members: ProcessIntegrityLevel,
  fields: {
    unknown: {value: 0},
    untrusted: {value: 1},
    low: {value: 2},
    medium: {value: 3},
    high: {value: 4},
    system: {value: 5},
    unknownFutureValue: {value: 127}
  }
} as EnumTypeConfig<ProcessIntegrityLevel>;
//#endregion