//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EventMessage } from './eventmessage.entity';
import { ResponseType } from './responsetype.enum';
import { TimeSlot } from './timeslot.complex';
//#endregion

export interface EventMessageResponse extends EventMessage {
  //#region ODataApiGen Properties
  proposedNewTime?: TimeSlot;
  responseType?: ResponseType;
  //#endregion
}