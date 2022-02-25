//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartAreaFormat } from './workbookchartareaformat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartAreaFormatEntityConfig = {
  name: 'workbookChartAreaFormat',
  base: 'microsoft.graph.entity',
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartAreaFormat>;
//#endregion