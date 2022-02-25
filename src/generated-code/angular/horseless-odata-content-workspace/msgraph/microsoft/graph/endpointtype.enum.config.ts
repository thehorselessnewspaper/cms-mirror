//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EndpointType } from './endpointtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const EndpointTypeConfig = {
  name: 'endpointType',
  members: EndpointType,
  fields: {
    default: {value: 0},
    voicemail: {value: 1},
    skypeForBusiness: {value: 2},
    skypeForBusinessVoipPhone: {value: 3},
    unknownFutureValue: {value: 4}
  }
} as EnumTypeConfig<EndpointType>;
//#endregion