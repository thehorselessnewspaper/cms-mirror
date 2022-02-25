//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartSeriesFormat } from './workbookchartseriesformat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartSeriesFormatEntityConfig = {
  name: 'workbookChartSeriesFormat',
  base: 'microsoft.graph.entity',
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    line: {type: 'graph.workbookChartLineFormat', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartSeriesFormat>;
//#endregion