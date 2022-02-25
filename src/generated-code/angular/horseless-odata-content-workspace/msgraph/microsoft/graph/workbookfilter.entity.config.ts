//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookFilter } from './workbookfilter.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookFilterEntityConfig = {
  name: 'workbookFilter',
  base: 'microsoft.graph.entity',
  fields: {
    criteria: {type: 'graph.workbookFilterCriteria'}
  }
} as StructuredTypeConfig<WorkbookFilter>;
//#endregion