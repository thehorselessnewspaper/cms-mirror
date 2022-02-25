//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Participant } from './participant.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ParticipantEntityConfig = {
  name: 'participant',
  base: 'microsoft.graph.entity',
  fields: {
    info: {type: 'graph.participantInfo', nullable: false},
    recordingInfo: {type: 'graph.recordingInfo'},
    mediaStreams: {type: 'graph.mediaStream', collection: true},
    isMuted: {type: 'Edm.Boolean', nullable: false},
    isInLobby: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<Participant>;
//#endregion