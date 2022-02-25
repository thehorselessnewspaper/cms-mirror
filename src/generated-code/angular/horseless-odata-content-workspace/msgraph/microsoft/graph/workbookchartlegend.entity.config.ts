//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartLegend } from './workbookchartlegend.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartLegendEntityConfig = {
  name: 'workbookChartLegend',
  base: 'microsoft.graph.entity',
  fields: {
    overlay: {type: 'Edm.Boolean'},
    position: {type: 'Edm.String'},
    visible: {type: 'Edm.Boolean', nullable: false},
    format: {type: 'graph.workbookChartLegendFormat', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartLegend>;
//#endregion