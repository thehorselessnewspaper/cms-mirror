//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookApplication } from './workbookapplication.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookApplicationEntityConfig = {
  name: 'workbookApplication',
  base: 'microsoft.graph.entity',
  fields: {
    calculationMode: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<WorkbookApplication>;
//#endregion