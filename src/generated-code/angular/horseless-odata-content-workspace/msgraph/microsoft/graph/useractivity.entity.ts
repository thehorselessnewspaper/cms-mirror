//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Status } from './status.enum';
import { Json } from './json.complex';
import { VisualInfo } from './visualinfo.complex';
import { ActivityHistoryItem } from './activityhistoryitem.entity';
//#endregion

export interface UserActivity extends Entity {
  //#region ODataApiGen Properties
  visualElements: VisualInfo;
  activitySourceHost: string;
  activationUrl: string;
  appActivityId: string;
  appDisplayName?: string;
  contentUrl?: string;
  createdDateTime?: Date;
  expirationDateTime?: Date;
  fallbackUrl?: string;
  lastModifiedDateTime?: Date;
  userTimezone?: string;
  contentInfo?: Json;
  status?: Status;
  historyItems?: ActivityHistoryItem[];
  //#endregion
}