//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppPolicyDeploymentSummaryPerApp } from './managedapppolicydeploymentsummaryperapp.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedAppPolicyDeploymentSummaryPerAppComplexConfig = {
  name: 'managedAppPolicyDeploymentSummaryPerApp',
  fields: {
    mobileAppIdentifier: {type: 'graph.mobileAppIdentifier'},
    configurationAppliedUserCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<ManagedAppPolicyDeploymentSummaryPerApp>;
//#endregion