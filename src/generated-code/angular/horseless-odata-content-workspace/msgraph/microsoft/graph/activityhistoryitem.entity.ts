//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Status } from './status.enum';
import { UserActivity } from './useractivity.entity';
//#endregion

export interface ActivityHistoryItem extends Entity {
  //#region ODataApiGen Properties
  status?: Status;
  activeDurationSeconds?: number;
  createdDateTime?: Date;
  lastActiveDateTime?: Date;
  lastModifiedDateTime?: Date;
  expirationDateTime?: Date;
  startedDateTime: Date;
  userTimezone?: string;
  activity?: UserActivity;
  //#endregion
}