//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Place } from './place.entity';
import { Room } from './room.entity';
//#endregion

export interface RoomList extends Place {
  //#region ODataApiGen Properties
  emailAddress?: string;
  rooms?: Room[];
  //#endregion
}