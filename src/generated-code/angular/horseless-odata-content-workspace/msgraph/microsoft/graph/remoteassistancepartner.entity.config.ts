//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RemoteAssistancePartner } from './remoteassistancepartner.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RemoteAssistancePartnerEntityConfig = {
  name: 'remoteAssistancePartner',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    onboardingUrl: {type: 'Edm.String'},
    onboardingStatus: {type: 'graph.remoteAssistanceOnboardingStatus', nullable: false},
    lastConnectionDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as StructuredTypeConfig<RemoteAssistancePartner>;
//#endregion