//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PolicyRoot } from './policyroot.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PolicyRootEntityConfig = {
  name: 'policyRoot',
  base: 'microsoft.graph.entity',
  fields: {
    activityBasedTimeoutPolicies: {type: 'graph.activityBasedTimeoutPolicy', collection: true, navigation: true},
    claimsMappingPolicies: {type: 'graph.claimsMappingPolicy', collection: true, navigation: true},
    homeRealmDiscoveryPolicies: {type: 'graph.homeRealmDiscoveryPolicy', collection: true, navigation: true},
    tokenIssuancePolicies: {type: 'graph.tokenIssuancePolicy', collection: true, navigation: true},
    tokenLifetimePolicies: {type: 'graph.tokenLifetimePolicy', collection: true, navigation: true}
  }
} as StructuredTypeConfig<PolicyRoot>;
//#endregion