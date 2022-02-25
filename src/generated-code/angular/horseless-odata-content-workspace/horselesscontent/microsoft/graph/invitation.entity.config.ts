//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Invitation } from './invitation.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const InvitationEntityConfig = {
  name: 'invitation',
  base: 'microsoft.graph.entity',
  fields: {
    invitedUserDisplayName: {type: 'Edm.String'},
    invitedUserType: {type: 'Edm.String'},
    invitedUserEmailAddress: {type: 'Edm.String', nullable: false},
    invitedUserMessageInfo: {type: 'graph.invitedUserMessageInfo'},
    sendInvitationMessage: {type: 'Edm.Boolean'},
    inviteRedirectUrl: {type: 'Edm.String', nullable: false},
    inviteRedeemUrl: {type: 'Edm.String'},
    status: {type: 'Edm.String'},
    invitedUser: {type: 'graph.user', navigation: true}
  }
} as StructuredTypeConfig<Invitation>;
//#endregion