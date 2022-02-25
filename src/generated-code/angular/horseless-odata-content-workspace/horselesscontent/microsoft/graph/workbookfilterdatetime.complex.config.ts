//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookFilterDatetime } from './workbookfilterdatetime.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookFilterDatetimeComplexConfig = {
  name: 'workbookFilterDatetime',
  fields: {
    date: {type: 'Edm.String'},
    specificity: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<WorkbookFilterDatetime>;
//#endregion