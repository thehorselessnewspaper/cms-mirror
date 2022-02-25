//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileAppIdentifier } from './mobileappidentifier.complex';
//#endregion

export interface ManagedAppPolicyDeploymentSummaryPerApp {
  //#region ODataApiGen Properties
  mobileAppIdentifier?: MobileAppIdentifier;
  configurationAppliedUserCount: number;
  //#endregion
}