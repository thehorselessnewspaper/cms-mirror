//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EdgeSearchEngineCustom } from './edgesearchenginecustom.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EdgeSearchEngineCustomComplexConfig = {
  name: 'edgeSearchEngineCustom',
  base: 'microsoft.graph.edgeSearchEngineBase',
  fields: {
    edgeSearchEngineOpenSearchXmlUrl: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<EdgeSearchEngineCustom>;
//#endregion