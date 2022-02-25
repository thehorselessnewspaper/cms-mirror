//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScheduleEntityTheme } from './scheduleentitytheme.enum';
//#endregion

export interface ShiftActivity {
  //#region ODataApiGen Properties
  isPaid?: boolean;
  startDateTime?: Date;
  endDateTime?: Date;
  code?: string;
  displayName?: string;
  theme: ScheduleEntityTheme;
  //#endregion
}