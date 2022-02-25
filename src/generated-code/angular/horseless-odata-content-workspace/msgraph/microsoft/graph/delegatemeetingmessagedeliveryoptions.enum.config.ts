//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DelegateMeetingMessageDeliveryOptions } from './delegatemeetingmessagedeliveryoptions.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DelegateMeetingMessageDeliveryOptionsConfig = {
  name: 'delegateMeetingMessageDeliveryOptions',
  members: DelegateMeetingMessageDeliveryOptions,
  fields: {
    sendToDelegateAndInformationToPrincipal: {value: 0},
    sendToDelegateAndPrincipal: {value: 1},
    sendToDelegateOnly: {value: 2}
  }
} as EnumTypeConfig<DelegateMeetingMessageDeliveryOptions>;
//#endregion