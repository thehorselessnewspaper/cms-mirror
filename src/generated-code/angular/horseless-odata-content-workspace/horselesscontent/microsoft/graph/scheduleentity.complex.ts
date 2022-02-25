//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScheduleEntityTheme } from './scheduleentitytheme.enum';
//#endregion

export interface ScheduleEntity {
  //#region ODataApiGen Properties
  startDateTime?: Date;
  endDateTime?: Date;
  theme: ScheduleEntityTheme;
  //#endregion
}