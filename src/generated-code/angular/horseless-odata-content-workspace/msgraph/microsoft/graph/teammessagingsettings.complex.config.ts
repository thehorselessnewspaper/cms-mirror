//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamMessagingSettings } from './teammessagingsettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeamMessagingSettingsComplexConfig = {
  name: 'teamMessagingSettings',
  fields: {
    allowUserEditMessages: {type: 'Edm.Boolean'},
    allowUserDeleteMessages: {type: 'Edm.Boolean'},
    allowOwnerDeleteMessages: {type: 'Edm.Boolean'},
    allowTeamMentions: {type: 'Edm.Boolean'},
    allowChannelMentions: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<TeamMessagingSettings>;
//#endregion