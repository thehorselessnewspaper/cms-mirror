//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Channel } from './channel.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ChannelEntityConfig = {
  name: 'channel',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    email: {type: 'Edm.String'},
    webUrl: {type: 'Edm.String'},
    messages: {type: 'graph.chatMessage', collection: true, navigation: true},
    tabs: {type: 'graph.teamsTab', collection: true, navigation: true},
    filesFolder: {type: 'graph.driveItem', navigation: true}
  }
} as StructuredTypeConfig<Channel>;
//#endregion