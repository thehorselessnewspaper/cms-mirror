//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InviteParticipantsOperation } from './inviteparticipantsoperation.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const InviteParticipantsOperationEntityConfig = {
  name: 'inviteParticipantsOperation',
  base: 'microsoft.graph.commsOperation',
  open: true,
  fields: {
    participants: {type: 'graph.invitationParticipantInfo', nullable: false, collection: true}
  }
} as StructuredTypeConfig<InviteParticipantsOperation>;
//#endregion