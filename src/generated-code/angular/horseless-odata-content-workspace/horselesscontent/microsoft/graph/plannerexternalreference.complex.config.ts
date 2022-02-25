//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerExternalReference } from './plannerexternalreference.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerExternalReferenceComplexConfig = {
  name: 'plannerExternalReference',
  fields: {
    alias: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    previewPriority: {type: 'Edm.String'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<PlannerExternalReference>;
//#endregion