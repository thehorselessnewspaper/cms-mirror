//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { ShiftAvailability } from './shiftavailability.complex';
//#endregion

export interface ShiftPreferences extends ChangeTrackedEntity {
  //#region ODataApiGen Properties
  availability?: ShiftAvailability[];
  //#endregion
}