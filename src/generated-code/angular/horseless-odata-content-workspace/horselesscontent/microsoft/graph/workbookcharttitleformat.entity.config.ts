//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartTitleFormat } from './workbookcharttitleformat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartTitleFormatEntityConfig = {
  name: 'workbookChartTitleFormat',
  base: 'microsoft.graph.entity',
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartTitleFormat>;
//#endregion