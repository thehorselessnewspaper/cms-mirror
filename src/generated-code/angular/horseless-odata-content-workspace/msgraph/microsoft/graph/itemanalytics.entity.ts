//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
//#endregion

export interface ItemAnalytics extends Entity {
  //#region ODataApiGen Properties
  itemActivityStats?: ItemActivityStat[];
  allTime?: ItemActivityStat;
  lastSevenDays?: ItemActivityStat;
  //#endregion
}