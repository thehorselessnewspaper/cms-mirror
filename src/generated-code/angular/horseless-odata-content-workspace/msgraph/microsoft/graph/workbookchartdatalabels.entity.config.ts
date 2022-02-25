//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartDataLabels } from './workbookchartdatalabels.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartDataLabelsEntityConfig = {
  name: 'workbookChartDataLabels',
  base: 'microsoft.graph.entity',
  fields: {
    position: {type: 'Edm.String'},
    separator: {type: 'Edm.String'},
    showBubbleSize: {type: 'Edm.Boolean'},
    showCategoryName: {type: 'Edm.Boolean'},
    showLegendKey: {type: 'Edm.Boolean'},
    showPercentage: {type: 'Edm.Boolean'},
    showSeriesName: {type: 'Edm.Boolean'},
    showValue: {type: 'Edm.Boolean'},
    format: {type: 'graph.workbookChartDataLabelFormat', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartDataLabels>;
//#endregion