//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TargetedManagedAppConfiguration } from './targetedmanagedappconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TargetedManagedAppConfigurationEntityConfig = {
  name: 'targetedManagedAppConfiguration',
  base: 'microsoft.graph.managedAppConfiguration',
  fields: {
    deployedAppCount: {type: 'Edm.Int32', nullable: false},
    isAssigned: {type: 'Edm.Boolean', nullable: false},
    apps: {type: 'graph.managedMobileApp', collection: true, navigation: true},
    deploymentSummary: {type: 'graph.managedAppPolicyDeploymentSummary', navigation: true},
    assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true, navigation: true}
  }
} as StructuredTypeConfig<TargetedManagedAppConfiguration>;
//#endregion