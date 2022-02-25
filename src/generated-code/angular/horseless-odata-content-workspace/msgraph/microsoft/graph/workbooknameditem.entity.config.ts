//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookNamedItem } from './workbooknameditem.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookNamedItemEntityConfig = {
  name: 'workbookNamedItem',
  base: 'microsoft.graph.entity',
  fields: {
    comment: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    scope: {type: 'Edm.String', nullable: false},
    type: {type: 'Edm.String'},
    value: {type: 'graph.Json'},
    visible: {type: 'Edm.Boolean', nullable: false},
    worksheet: {type: 'graph.workbookWorksheet', navigation: true}
  }
} as StructuredTypeConfig<WorkbookNamedItem>;
//#endregion