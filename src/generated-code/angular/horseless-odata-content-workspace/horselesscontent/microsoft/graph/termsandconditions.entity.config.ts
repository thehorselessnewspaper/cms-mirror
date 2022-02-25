//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TermsAndConditions } from './termsandconditions.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TermsAndConditionsEntityConfig = {
  name: 'termsAndConditions',
  base: 'microsoft.graph.entity',
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    title: {type: 'Edm.String'},
    bodyText: {type: 'Edm.String'},
    acceptanceStatement: {type: 'Edm.String'},
    version: {type: 'Edm.Int32', nullable: false},
    assignments: {type: 'graph.termsAndConditionsAssignment', collection: true, navigation: true},
    acceptanceStatuses: {type: 'graph.termsAndConditionsAcceptanceStatus', collection: true, navigation: true}
  }
} as StructuredTypeConfig<TermsAndConditions>;
//#endregion