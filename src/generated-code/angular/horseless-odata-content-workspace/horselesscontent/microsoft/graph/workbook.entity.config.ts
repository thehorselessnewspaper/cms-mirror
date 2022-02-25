//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Workbook } from './workbook.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookEntityConfig = {
  name: 'workbook',
  base: 'microsoft.graph.entity',
  fields: {
    application: {type: 'graph.workbookApplication', navigation: true},
    names: {type: 'graph.workbookNamedItem', collection: true, navigation: true},
    tables: {type: 'graph.workbookTable', collection: true, navigation: true},
    worksheets: {type: 'graph.workbookWorksheet', collection: true, navigation: true},
    comments: {type: 'graph.workbookComment', collection: true, navigation: true},
    functions: {type: 'graph.workbookFunctions', navigation: true}
  }
} as StructuredTypeConfig<Workbook>;
//#endregion