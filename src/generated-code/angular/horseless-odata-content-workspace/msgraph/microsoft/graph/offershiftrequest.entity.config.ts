//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OfferShiftRequest } from './offershiftrequest.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OfferShiftRequestEntityConfig = {
  name: 'offerShiftRequest',
  base: 'microsoft.graph.scheduleChangeRequest',
  fields: {
    recipientActionMessage: {type: 'Edm.String'},
    recipientActionDateTime: {type: 'Edm.DateTimeOffset'},
    senderShiftId: {type: 'Edm.String'},
    recipientUserId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OfferShiftRequest>;
//#endregion