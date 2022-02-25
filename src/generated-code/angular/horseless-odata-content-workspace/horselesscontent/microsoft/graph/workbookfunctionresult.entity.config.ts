//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookFunctionResult } from './workbookfunctionresult.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookFunctionResultEntityConfig = {
  name: 'workbookFunctionResult',
  base: 'microsoft.graph.entity',
  fields: {
    error: {type: 'Edm.String'},
    value: {type: 'graph.Json'}
  }
} as StructuredTypeConfig<WorkbookFunctionResult>;
//#endregion