//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { OpenShiftItem } from './openshiftitem.complex';
//#endregion

export interface OpenShift extends ChangeTrackedEntity {
  //#region ODataApiGen Properties
  sharedOpenShift?: OpenShiftItem;
  draftOpenShift?: OpenShiftItem;
  schedulingGroupId?: string;
  //#endregion
}