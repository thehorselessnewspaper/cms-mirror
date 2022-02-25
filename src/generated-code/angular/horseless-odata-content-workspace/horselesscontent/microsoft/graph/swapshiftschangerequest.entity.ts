//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OfferShiftRequest } from './offershiftrequest.entity';
//#endregion

export interface SwapShiftsChangeRequest extends OfferShiftRequest {
  //#region ODataApiGen Properties
  recipientShiftId?: string;
  //#endregion
}