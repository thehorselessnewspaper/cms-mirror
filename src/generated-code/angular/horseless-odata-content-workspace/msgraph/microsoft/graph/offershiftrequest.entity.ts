//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScheduleChangeRequest } from './schedulechangerequest.entity';
//#endregion

export interface OfferShiftRequest extends ScheduleChangeRequest {
  //#region ODataApiGen Properties
  recipientActionMessage?: string;
  recipientActionDateTime?: Date;
  senderShiftId?: string;
  recipientUserId?: string;
  //#endregion
}