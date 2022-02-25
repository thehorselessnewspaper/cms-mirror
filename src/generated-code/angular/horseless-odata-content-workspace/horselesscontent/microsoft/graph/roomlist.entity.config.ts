//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RoomList } from './roomlist.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RoomListEntityConfig = {
  name: 'roomList',
  base: 'microsoft.graph.place',
  fields: {
    emailAddress: {type: 'Edm.String'},
    rooms: {type: 'graph.room', collection: true, navigation: true}
  }
} as StructuredTypeConfig<RoomList>;
//#endregion