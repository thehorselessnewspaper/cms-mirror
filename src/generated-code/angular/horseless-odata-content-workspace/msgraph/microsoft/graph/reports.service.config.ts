//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ReportsService } from './reports.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const ReportsServiceEntitySetConfig = {
  name: 'reports',
  entityType: 'microsoft.graph.reportRoot',
  service: ReportsService
} as EntitySetConfig;
//#endregion