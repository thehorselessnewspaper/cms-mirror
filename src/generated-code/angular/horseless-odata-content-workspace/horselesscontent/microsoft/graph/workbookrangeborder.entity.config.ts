//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookRangeBorder } from './workbookrangeborder.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookRangeBorderEntityConfig = {
  name: 'workbookRangeBorder',
  base: 'microsoft.graph.entity',
  fields: {
    color: {type: 'Edm.String'},
    sideIndex: {type: 'Edm.String'},
    style: {type: 'Edm.String'},
    weight: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WorkbookRangeBorder>;
//#endregion