//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CommsOperation } from './commsoperation.entity';
//#endregion

export interface RecordOperation extends CommsOperation {
  //#region ODataApiGen Properties
  recordingLocation?: string;
  recordingAccessToken?: string;
  //#endregion
}