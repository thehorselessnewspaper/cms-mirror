//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SharingInvitation } from './sharinginvitation.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SharingInvitationComplexConfig = {
  name: 'sharingInvitation',
  fields: {
    email: {type: 'Edm.String'},
    invitedBy: {type: 'graph.identitySet'},
    redeemedBy: {type: 'Edm.String'},
    signInRequired: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<SharingInvitation>;
//#endregion