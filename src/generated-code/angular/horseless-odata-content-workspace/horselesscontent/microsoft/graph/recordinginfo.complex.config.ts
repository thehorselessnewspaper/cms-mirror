//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RecordingInfo } from './recordinginfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RecordingInfoComplexConfig = {
  name: 'recordingInfo',
  fields: {
    recordingStatus: {type: 'graph.recordingStatus', nullable: false},
    initiator: {type: 'graph.identitySet'}
  }
} as StructuredTypeConfig<RecordingInfo>;
//#endregion