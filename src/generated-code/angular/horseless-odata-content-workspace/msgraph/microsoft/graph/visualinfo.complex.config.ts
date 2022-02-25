//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { VisualInfo } from './visualinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const VisualInfoComplexConfig = {
  name: 'visualInfo',
  fields: {
    attribution: {type: 'graph.imageInfo'},
    backgroundColor: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    displayText: {type: 'Edm.String', nullable: false},
    content: {type: 'graph.Json'}
  }
} as StructuredTypeConfig<VisualInfo>;
//#endregion