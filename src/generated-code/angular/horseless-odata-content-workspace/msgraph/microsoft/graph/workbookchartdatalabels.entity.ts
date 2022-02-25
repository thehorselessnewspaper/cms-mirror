//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookChartDataLabelFormat } from './workbookchartdatalabelformat.entity';
//#endregion

export interface WorkbookChartDataLabels extends Entity {
  //#region ODataApiGen Properties
  position?: string;
  separator?: string;
  showBubbleSize?: boolean;
  showCategoryName?: boolean;
  showLegendKey?: boolean;
  showPercentage?: boolean;
  showSeriesName?: boolean;
  showValue?: boolean;
  format?: WorkbookChartDataLabelFormat;
  //#endregion
}