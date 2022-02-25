//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EventType } from './eventtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const EventTypeConfig = {
  name: 'eventType',
  members: EventType,
  fields: {
    singleInstance: {value: 0},
    occurrence: {value: 1},
    exception: {value: 2},
    seriesMaster: {value: 3}
  }
} as EnumTypeConfig<EventType>;
//#endregion