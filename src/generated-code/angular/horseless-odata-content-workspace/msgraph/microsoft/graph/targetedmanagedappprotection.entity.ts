//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppProtection } from './managedappprotection.entity';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
//#endregion

export interface TargetedManagedAppProtection extends ManagedAppProtection {
  //#region ODataApiGen Properties
  isAssigned: boolean;
  assignments?: TargetedManagedAppPolicyAssignment[];
  //#endregion
}