//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ParticipantInfo } from './participantinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ParticipantInfoComplexConfig = {
  name: 'participantInfo',
  fields: {
    identity: {type: 'graph.identitySet', nullable: false},
    endpointType: {type: 'graph.endpointType'},
    region: {type: 'Edm.String'},
    languageId: {type: 'Edm.String'},
    countryCode: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ParticipantInfo>;
//#endregion