//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookTableRow } from './workbooktablerow.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookTableRowEntityConfig = {
  name: 'workbookTableRow',
  base: 'microsoft.graph.entity',
  fields: {
    index: {type: 'Edm.Int32', nullable: false},
    values: {type: 'graph.Json'}
  }
} as StructuredTypeConfig<WorkbookTableRow>;
//#endregion