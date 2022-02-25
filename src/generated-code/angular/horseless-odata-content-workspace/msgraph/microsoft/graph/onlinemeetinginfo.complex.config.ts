//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnlineMeetingInfo } from './onlinemeetinginfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnlineMeetingInfoComplexConfig = {
  name: 'onlineMeetingInfo',
  fields: {
    joinUrl: {type: 'Edm.String'},
    conferenceId: {type: 'Edm.String'},
    tollNumber: {type: 'Edm.String'},
    tollFreeNumbers: {type: 'Edm.String', collection: true},
    quickDial: {type: 'Edm.String'},
    phones: {type: 'graph.phone', collection: true}
  }
} as StructuredTypeConfig<OnlineMeetingInfo>;
//#endregion