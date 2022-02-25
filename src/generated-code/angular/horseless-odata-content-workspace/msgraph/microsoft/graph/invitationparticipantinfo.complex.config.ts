//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InvitationParticipantInfo } from './invitationparticipantinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const InvitationParticipantInfoComplexConfig = {
  name: 'invitationParticipantInfo',
  open: true,
  fields: {
    identity: {type: 'graph.identitySet', nullable: false},
    replacesCallId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<InvitationParticipantInfo>;
//#endregion