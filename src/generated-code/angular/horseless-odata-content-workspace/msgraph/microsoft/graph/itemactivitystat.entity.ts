//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ItemActionStat } from './itemactionstat.complex';
import { IncompleteData } from './incompletedata.complex';
import { ItemActivity } from './itemactivity.entity';
//#endregion

export interface ItemActivityStat extends Entity {
  //#region ODataApiGen Properties
  startDateTime?: Date;
  endDateTime?: Date;
  access?: ItemActionStat;
  create?: ItemActionStat;
  delete?: ItemActionStat;
  edit?: ItemActionStat;
  move?: ItemActionStat;
  isTrending?: boolean;
  incompleteData?: IncompleteData;
  activities?: ItemActivity[];
  //#endregion
}