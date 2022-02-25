//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ManagedAppPolicyDeploymentSummaryPerApp } from './managedapppolicydeploymentsummaryperapp.complex';
//#endregion

export interface ManagedAppPolicyDeploymentSummary extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  configurationDeployedUserCount: number;
  lastRefreshTime: Date;
  configurationDeploymentSummaryPerApp?: ManagedAppPolicyDeploymentSummaryPerApp[];
  version?: string;
  //#endregion
}