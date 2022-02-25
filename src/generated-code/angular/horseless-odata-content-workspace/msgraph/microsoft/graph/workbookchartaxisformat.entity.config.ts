//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartAxisFormat } from './workbookchartaxisformat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartAxisFormatEntityConfig = {
  name: 'workbookChartAxisFormat',
  base: 'microsoft.graph.entity',
  fields: {
    font: {type: 'graph.workbookChartFont', navigation: true},
    line: {type: 'graph.workbookChartLineFormat', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartAxisFormat>;
//#endregion