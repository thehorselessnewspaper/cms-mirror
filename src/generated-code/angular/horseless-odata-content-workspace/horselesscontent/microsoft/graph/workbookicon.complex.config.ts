//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookIcon } from './workbookicon.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookIconComplexConfig = {
  name: 'workbookIcon',
  fields: {
    index: {type: 'Edm.Int32', nullable: false},
    set: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<WorkbookIcon>;
//#endregion