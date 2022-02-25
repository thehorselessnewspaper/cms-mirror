//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AlertFeedback } from './alertfeedback.enum';
import { AlertStatus } from './alertstatus.enum';
//#endregion

export interface AlertHistoryState {
  //#region ODataApiGen Properties
  appId?: string;
  assignedTo?: string;
  comments?: string[];
  feedback?: AlertFeedback;
  status?: AlertStatus;
  updatedDateTime?: Date;
  user?: string;
  //#endregion
}