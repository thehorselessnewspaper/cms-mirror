//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RecordingStatus } from './recordingstatus.enum';
import { IdentitySet } from './identityset.complex';
//#endregion

export interface RecordingInfo {
  //#region ODataApiGen Properties
  recordingStatus: RecordingStatus;
  initiator?: IdentitySet;
  //#endregion
}