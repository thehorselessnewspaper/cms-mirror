//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartFont } from './workbookchartfont.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartFontEntityConfig = {
  name: 'workbookChartFont',
  base: 'microsoft.graph.entity',
  fields: {
    bold: {type: 'Edm.Boolean'},
    color: {type: 'Edm.String'},
    italic: {type: 'Edm.Boolean'},
    name: {type: 'Edm.String'},
    size: {type: 'Edm.Double'},
    underline: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WorkbookChartFont>;
//#endregion