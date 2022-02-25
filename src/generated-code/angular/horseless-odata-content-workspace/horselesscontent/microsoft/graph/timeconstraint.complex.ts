//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ActivityDomain } from './activitydomain.enum';
import { TimeSlot } from './timeslot.complex';
//#endregion

export interface TimeConstraint {
  //#region ODataApiGen Properties
  activityDomain?: ActivityDomain;
  timeSlots?: TimeSlot[];
  //#endregion
}