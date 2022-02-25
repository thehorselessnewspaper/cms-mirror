//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartLegendFormat } from './workbookchartlegendformat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartLegendFormatEntityConfig = {
  name: 'workbookChartLegendFormat',
  base: 'microsoft.graph.entity',
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartLegendFormat>;
//#endregion