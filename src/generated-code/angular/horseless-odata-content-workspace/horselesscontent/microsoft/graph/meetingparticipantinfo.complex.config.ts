//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MeetingParticipantInfo } from './meetingparticipantinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MeetingParticipantInfoComplexConfig = {
  name: 'meetingParticipantInfo',
  fields: {
    identity: {type: 'graph.identitySet'},
    upn: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<MeetingParticipantInfo>;
//#endregion