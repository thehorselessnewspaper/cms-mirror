//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Media } from './media.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MediaComplexConfig = {
  name: 'media',
  fields: {
    label: {type: 'Edm.String'},
    callerNetwork: {type: 'microsoft.graph.callRecords.networkInfo'},
    calleeNetwork: {type: 'microsoft.graph.callRecords.networkInfo'},
    callerDevice: {type: 'microsoft.graph.callRecords.deviceInfo'},
    calleeDevice: {type: 'microsoft.graph.callRecords.deviceInfo'},
    streams: {type: 'microsoft.graph.callRecords.mediaStream', collection: true}
  }
} as StructuredTypeConfig<Media>;
//#endregion