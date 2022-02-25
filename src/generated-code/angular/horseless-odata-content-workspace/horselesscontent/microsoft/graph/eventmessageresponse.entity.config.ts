//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EventMessageResponse } from './eventmessageresponse.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EventMessageResponseEntityConfig = {
  name: 'eventMessageResponse',
  base: 'microsoft.graph.eventMessage',
  fields: {
    proposedNewTime: {type: 'graph.timeSlot'},
    responseType: {type: 'graph.responseType'}
  }
} as StructuredTypeConfig<EventMessageResponse>;
//#endregion