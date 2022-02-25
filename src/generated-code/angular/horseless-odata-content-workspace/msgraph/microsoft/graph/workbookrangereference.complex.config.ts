//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookRangeReference } from './workbookrangereference.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookRangeReferenceComplexConfig = {
  name: 'workbookRangeReference',
  fields: {
    address: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WorkbookRangeReference>;
//#endregion