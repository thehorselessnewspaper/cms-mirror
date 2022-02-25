//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ParticipantEndpoint } from './participantendpoint.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ParticipantEndpointComplexConfig = {
  name: 'participantEndpoint',
  base: 'microsoft.graph.callRecords.endpoint',
  fields: {
    identity: {type: 'graph.identitySet'},
    feedback: {type: 'microsoft.graph.callRecords.userFeedback'}
  }
} as StructuredTypeConfig<ParticipantEndpoint>;
//#endregion