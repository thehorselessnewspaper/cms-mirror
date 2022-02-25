//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ResourceVisualization } from './resourcevisualization.complex';
import { ResourceReference } from './resourcereference.complex';
import { UsageDetails } from './usagedetails.complex';
//#endregion

export interface UsedInsight extends Entity {
  //#region ODataApiGen Properties
  lastUsed?: UsageDetails;
  resourceVisualization?: ResourceVisualization;
  resourceReference?: ResourceReference;
  resource?: Entity;
  //#endregion
}