//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Team } from './team.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeamEntityConfig = {
  name: 'team',
  base: 'microsoft.graph.entity',
  open: true,
  fields: {
    webUrl: {type: 'Edm.String'},
    memberSettings: {type: 'graph.teamMemberSettings'},
    guestSettings: {type: 'graph.teamGuestSettings'},
    messagingSettings: {type: 'graph.teamMessagingSettings'},
    funSettings: {type: 'graph.teamFunSettings'},
    isArchived: {type: 'Edm.Boolean'},
    schedule: {type: 'graph.schedule', navigation: true},
    channels: {type: 'graph.channel', collection: true, navigation: true},
    primaryChannel: {type: 'graph.channel', navigation: true},
    installedApps: {type: 'graph.teamsAppInstallation', collection: true, navigation: true},
    operations: {type: 'graph.teamsAsyncOperation', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Team>;
//#endregion