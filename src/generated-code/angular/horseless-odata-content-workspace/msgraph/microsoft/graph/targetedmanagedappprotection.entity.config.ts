//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TargetedManagedAppProtection } from './targetedmanagedappprotection.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TargetedManagedAppProtectionEntityConfig = {
  name: 'targetedManagedAppProtection',
  base: 'microsoft.graph.managedAppProtection',
  fields: {
    isAssigned: {type: 'Edm.Boolean', nullable: false},
    assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true, navigation: true}
  }
} as StructuredTypeConfig<TargetedManagedAppProtection>;
//#endregion