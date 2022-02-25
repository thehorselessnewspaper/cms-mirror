//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppConfiguration } from './managedappconfiguration.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
//#endregion

export interface TargetedManagedAppConfiguration extends ManagedAppConfiguration {
  //#region ODataApiGen Properties
  deployedAppCount: number;
  isAssigned: boolean;
  apps?: ManagedMobileApp[];
  deploymentSummary?: ManagedAppPolicyDeploymentSummary;
  assignments?: TargetedManagedAppPolicyAssignment[];
  //#endregion
}