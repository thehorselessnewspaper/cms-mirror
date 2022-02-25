//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { TimeOffReasonIconType } from './timeoffreasonicontype.enum';
//#endregion

export interface TimeOffReason extends ChangeTrackedEntity {
  //#region ODataApiGen Properties
  displayName?: string;
  iconType?: TimeOffReasonIconType;
  isActive?: boolean;
  //#endregion
}