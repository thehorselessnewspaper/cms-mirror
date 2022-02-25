//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EdgeSearchEngine } from './edgesearchengine.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EdgeSearchEngineComplexConfig = {
  name: 'edgeSearchEngine',
  base: 'microsoft.graph.edgeSearchEngineBase',
  fields: {
    edgeSearchEngineType: {type: 'graph.edgeSearchEngineType', nullable: false}
  }
} as StructuredTypeConfig<EdgeSearchEngine>;
//#endregion