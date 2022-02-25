//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Calendar } from './calendar.entity';
//#endregion

export interface CalendarGroup extends Entity {
  //#region ODataApiGen Properties
  name?: string;
  classId?: string;
  changeKey?: string;
  calendars?: Calendar[];
  //#endregion
}