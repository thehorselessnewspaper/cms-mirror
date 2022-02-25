//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookSessionInfo } from './workbooksessioninfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookSessionInfoComplexConfig = {
  name: 'workbookSessionInfo',
  fields: {
    id: {type: 'Edm.String'},
    persistChanges: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<WorkbookSessionInfo>;
//#endregion