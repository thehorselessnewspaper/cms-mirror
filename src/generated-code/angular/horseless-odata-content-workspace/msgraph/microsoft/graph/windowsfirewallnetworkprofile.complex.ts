//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { StateManagementSetting } from './statemanagementsetting.enum';
//#endregion

export interface WindowsFirewallNetworkProfile {
  //#region ODataApiGen Properties
  firewallEnabled: StateManagementSetting;
  stealthModeBlocked: boolean;
  incomingTrafficBlocked: boolean;
  unicastResponsesToMulticastBroadcastsBlocked: boolean;
  inboundNotificationsBlocked: boolean;
  authorizedApplicationRulesFromGroupPolicyMerged: boolean;
  globalPortRulesFromGroupPolicyMerged: boolean;
  connectionSecurityRulesFromGroupPolicyMerged: boolean;
  outboundConnectionsBlocked: boolean;
  inboundConnectionsBlocked: boolean;
  securedPacketExemptionAllowed: boolean;
  policyRulesFromGroupPolicyMerged: boolean;
  //#endregion
}