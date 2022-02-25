//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Trending } from './trending.entity';
import { SharedInsight } from './sharedinsight.entity';
import { UsedInsight } from './usedinsight.entity';
//#endregion

export interface OfficeGraphInsights extends Entity {
  //#region ODataApiGen Properties
  trending?: Trending[];
  shared?: SharedInsight[];
  used?: UsedInsight[];
  //#endregion
}