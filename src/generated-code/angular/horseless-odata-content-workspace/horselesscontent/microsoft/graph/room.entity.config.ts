//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Room } from './room.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RoomEntityConfig = {
  name: 'room',
  base: 'microsoft.graph.place',
  fields: {
    emailAddress: {type: 'Edm.String'},
    nickname: {type: 'Edm.String', nullable: false},
    building: {type: 'Edm.String'},
    floorNumber: {type: 'Edm.Int32'},
    label: {type: 'Edm.String'},
    capacity: {type: 'Edm.Int32'},
    bookingType: {type: 'graph.bookingType'},
    audioDeviceName: {type: 'Edm.String'},
    videoDeviceName: {type: 'Edm.String'},
    displayDeviceName: {type: 'Edm.String'},
    isWheelChairAccessible: {type: 'Edm.Boolean'},
    tags: {type: 'Edm.String', collection: true},
    floorLabel: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Room>;
//#endregion