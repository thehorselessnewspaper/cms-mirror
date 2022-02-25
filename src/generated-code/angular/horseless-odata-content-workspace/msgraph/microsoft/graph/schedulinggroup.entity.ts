//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
//#endregion

export interface SchedulingGroup extends ChangeTrackedEntity {
  //#region ODataApiGen Properties
  displayName?: string;
  isActive?: boolean;
  userIds?: string[];
  //#endregion
}