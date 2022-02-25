//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedAppPolicyDeploymentSummaryEntityConfig = {
  name: 'managedAppPolicyDeploymentSummary',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    configurationDeployedUserCount: {type: 'Edm.Int32', nullable: false},
    lastRefreshTime: {type: 'Edm.DateTimeOffset', nullable: false},
    configurationDeploymentSummaryPerApp: {type: 'graph.managedAppPolicyDeploymentSummaryPerApp', collection: true},
    version: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedAppPolicyDeploymentSummary>;
//#endregion