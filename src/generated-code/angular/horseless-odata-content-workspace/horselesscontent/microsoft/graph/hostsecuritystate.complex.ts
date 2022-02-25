//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

export interface HostSecurityState {
  //#region ODataApiGen Properties
  fqdn?: string;
  isAzureAdJoined?: boolean;
  isAzureAdRegistered?: boolean;
  isHybridAzureDomainJoined?: boolean;
  netBiosName?: string;
  os?: string;
  privateIpAddress?: string;
  publicIpAddress?: string;
  riskScore?: string;
  //#endregion
}