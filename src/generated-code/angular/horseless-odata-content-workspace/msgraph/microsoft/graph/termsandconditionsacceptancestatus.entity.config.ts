//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TermsAndConditionsAcceptanceStatus } from './termsandconditionsacceptancestatus.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TermsAndConditionsAcceptanceStatusEntityConfig = {
  name: 'termsAndConditionsAcceptanceStatus',
  base: 'microsoft.graph.entity',
  fields: {
    userDisplayName: {type: 'Edm.String'},
    acceptedVersion: {type: 'Edm.Int32', nullable: false},
    acceptedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userPrincipalName: {type: 'Edm.String'},
    termsAndConditions: {type: 'graph.termsAndConditions', navigation: true}
  }
} as StructuredTypeConfig<TermsAndConditionsAcceptanceStatus>;
//#endregion