//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.complex';
import { AccessAction } from './accessaction.complex';
import { DriveItem } from './driveitem.entity';
//#endregion

export interface ItemActivity extends Entity {
  //#region ODataApiGen Properties
  access?: AccessAction;
  activityDateTime?: Date;
  actor?: IdentitySet;
  driveItem?: DriveItem;
  //#endregion
}