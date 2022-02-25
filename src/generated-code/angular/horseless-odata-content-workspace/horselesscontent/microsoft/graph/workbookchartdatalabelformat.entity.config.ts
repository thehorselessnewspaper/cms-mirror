//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartDataLabelFormat } from './workbookchartdatalabelformat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartDataLabelFormatEntityConfig = {
  name: 'workbookChartDataLabelFormat',
  base: 'microsoft.graph.entity',
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartDataLabelFormat>;
//#endregion