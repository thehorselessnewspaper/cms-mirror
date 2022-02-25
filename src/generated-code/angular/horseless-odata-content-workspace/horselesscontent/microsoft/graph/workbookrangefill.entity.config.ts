//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookRangeFill } from './workbookrangefill.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookRangeFillEntityConfig = {
  name: 'workbookRangeFill',
  base: 'microsoft.graph.entity',
  fields: {
    color: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WorkbookRangeFill>;
//#endregion