//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EdgeSearchEngineType } from './edgesearchenginetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const EdgeSearchEngineTypeConfig = {
  name: 'edgeSearchEngineType',
  members: EdgeSearchEngineType,
  fields: {
    default: {value: 0},
    bing: {value: 1}
  }
} as EnumTypeConfig<EdgeSearchEngineType>;
//#endregion