//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookPivotTable } from './workbookpivottable.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookPivotTableEntityConfig = {
  name: 'workbookPivotTable',
  base: 'microsoft.graph.entity',
  fields: {
    name: {type: 'Edm.String'},
    worksheet: {type: 'graph.workbookWorksheet', navigation: true}
  }
} as StructuredTypeConfig<WorkbookPivotTable>;
//#endregion