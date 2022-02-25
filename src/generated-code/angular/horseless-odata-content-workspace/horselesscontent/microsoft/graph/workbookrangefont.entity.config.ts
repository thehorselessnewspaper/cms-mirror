//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookRangeFont } from './workbookrangefont.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookRangeFontEntityConfig = {
  name: 'workbookRangeFont',
  base: 'microsoft.graph.entity',
  fields: {
    bold: {type: 'Edm.Boolean'},
    color: {type: 'Edm.String'},
    italic: {type: 'Edm.Boolean'},
    name: {type: 'Edm.String'},
    size: {type: 'Edm.Double'},
    underline: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WorkbookRangeFont>;
//#endregion