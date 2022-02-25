//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChartAxisTitle } from './workbookchartaxistitle.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartAxisTitleEntityConfig = {
  name: 'workbookChartAxisTitle',
  base: 'microsoft.graph.entity',
  fields: {
    text: {type: 'Edm.String'},
    visible: {type: 'Edm.Boolean', nullable: false},
    format: {type: 'graph.workbookChartAxisTitleFormat', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartAxisTitle>;
//#endregion