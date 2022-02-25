//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerChecklistItem } from './plannerchecklistitem.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerChecklistItemComplexConfig = {
  name: 'plannerChecklistItem',
  fields: {
    isChecked: {type: 'Edm.Boolean'},
    title: {type: 'Edm.String'},
    orderHint: {type: 'Edm.String'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<PlannerChecklistItem>;
//#endregion