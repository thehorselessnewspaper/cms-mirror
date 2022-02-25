//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkbookFilterCriteria } from './workbookfiltercriteria.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkbookFilterCriteriaComplexConfig = {
  name: 'workbookFilterCriteria',
  fields: {
    color: {type: 'Edm.String'},
    criterion1: {type: 'Edm.String'},
    criterion2: {type: 'Edm.String'},
    dynamicCriteria: {type: 'Edm.String', nullable: false},
    filterOn: {type: 'Edm.String', nullable: false},
    icon: {type: 'graph.workbookIcon'},
    operator: {type: 'Edm.String', nullable: false},
    values: {type: 'graph.Json'}
  }
} as StructuredTypeConfig<WorkbookFilterCriteria>;
//#endregion