//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
import { ActivityBasedTimeoutPolicy } from './activitybasedtimeoutpolicy.entity';
import { ClaimsMappingPolicy } from './claimsmappingpolicy.entity';
import { HomeRealmDiscoveryPolicy } from './homerealmdiscoverypolicy.entity';
//#endregion

export interface PolicyRoot extends Entity {
  //#region ODataApiGen Properties
  activityBasedTimeoutPolicies?: ActivityBasedTimeoutPolicy[];
  claimsMappingPolicies?: ClaimsMappingPolicy[];
  homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[];
  tokenIssuancePolicies?: TokenIssuancePolicy[];
  tokenLifetimePolicies?: TokenLifetimePolicy[];
  //#endregion
}