//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SwapShiftsChangeRequest } from './swapshiftschangerequest.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SwapShiftsChangeRequestEntityConfig = {
  name: 'swapShiftsChangeRequest',
  base: 'microsoft.graph.offerShiftRequest',
  fields: {
    recipientShiftId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SwapShiftsChangeRequest>;
//#endregion