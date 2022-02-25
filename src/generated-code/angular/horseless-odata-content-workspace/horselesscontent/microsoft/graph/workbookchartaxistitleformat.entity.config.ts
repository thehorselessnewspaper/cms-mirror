//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartAxisTitleFormat } from './workbookchartaxistitleformat.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartAxisTitleFormatEntityConfig = {
  name: 'workbookChartAxisTitleFormat',
  base: 'microsoft.graph.entity',
  fields: {
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartAxisTitleFormat>;
//#endregion