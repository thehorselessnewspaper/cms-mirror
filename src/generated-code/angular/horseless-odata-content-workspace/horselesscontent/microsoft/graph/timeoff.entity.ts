//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { TimeOffItem } from './timeoffitem.complex';
//#endregion

export interface TimeOff extends ChangeTrackedEntity {
  //#region ODataApiGen Properties
  sharedTimeOff?: TimeOffItem;
  draftTimeOff?: TimeOffItem;
  userId?: string;
  //#endregion
}