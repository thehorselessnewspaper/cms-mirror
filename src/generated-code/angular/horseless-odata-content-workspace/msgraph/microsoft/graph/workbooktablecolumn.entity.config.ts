//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookTableColumn } from './workbooktablecolumn.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookTableColumnEntityConfig = {
  name: 'workbookTableColumn',
  base: 'microsoft.graph.entity',
  fields: {
    index: {type: 'Edm.Int32', nullable: false},
    name: {type: 'Edm.String'},
    values: {type: 'graph.Json'},
    filter: {type: 'graph.workbookFilter', navigation: true}
  }
} as StructuredTypeConfig<WorkbookTableColumn>;
//#endregion