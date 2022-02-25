//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookSortField } from './workbooksortfield.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookSortFieldComplexConfig = {
  name: 'workbookSortField',
  fields: {
    ascending: {type: 'Edm.Boolean', nullable: false},
    color: {type: 'Edm.String'},
    dataOption: {type: 'Edm.String', nullable: false},
    icon: {type: 'graph.workbookIcon'},
    key: {type: 'Edm.Int32', nullable: false},
    sortOn: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<WorkbookSortField>;
//#endregion