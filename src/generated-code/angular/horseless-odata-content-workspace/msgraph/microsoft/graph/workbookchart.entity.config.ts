﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookChart } from './workbookchart.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookChartEntityConfig = {
  name: 'workbookChart',
  base: 'microsoft.graph.entity',
  fields: {
    height: {type: 'Edm.Double', nullable: false},
    left: {type: 'Edm.Double', nullable: false},
    name: {type: 'Edm.String'},
    top: {type: 'Edm.Double', nullable: false},
    width: {type: 'Edm.Double', nullable: false},
    axes: {type: 'graph.workbookChartAxes', navigation: true},
    dataLabels: {type: 'graph.workbookChartDataLabels', navigation: true},
    format: {type: 'graph.workbookChartAreaFormat', navigation: true},
    legend: {type: 'graph.workbookChartLegend', navigation: true},
    series: {type: 'graph.workbookChartSeries', collection: true, navigation: true},
    title: {type: 'graph.workbookChartTitle', navigation: true},
    worksheet: {type: 'graph.workbookWorksheet', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChart>;
//#endregion