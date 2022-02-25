//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookTableSort } from './workbooktablesort.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookTableSortEntityConfig = {
  name: 'workbookTableSort',
  base: 'microsoft.graph.entity',
  fields: {
    fields: {type: 'graph.workbookSortField', collection: true},
    matchCase: {type: 'Edm.Boolean', nullable: false},
    method: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<WorkbookTableSort>;
//#endregion