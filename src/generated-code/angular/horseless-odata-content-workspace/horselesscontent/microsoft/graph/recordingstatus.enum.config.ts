//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RecordingStatus } from './recordingstatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RecordingStatusConfig = {
  name: 'recordingStatus',
  members: RecordingStatus,
  fields: {
    unknown: {value: 0},
    notRecording: {value: 1},
    recording: {value: 2},
    failed: {value: 3},
    unknownFutureValue: {value: 4}
  }
} as EnumTypeConfig<RecordingStatus>;
//#endregion