//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { AlertFeedback } from './alertfeedback.enum';
import { AlertSeverity } from './alertseverity.enum';
import { AlertStatus } from './alertstatus.enum';
import { CloudAppSecurityState } from './cloudappsecuritystate.complex';
import { FileSecurityState } from './filesecuritystate.complex';
import { AlertHistoryState } from './alerthistorystate.complex';
import { HostSecurityState } from './hostsecuritystate.complex';
import { MalwareState } from './malwarestate.complex';
import { NetworkConnection } from './networkconnection.complex';
import { Process } from './process.complex';
import { RegistryKeyState } from './registrykeystate.complex';
import { SecurityResource } from './securityresource.complex';
import { AlertTrigger } from './alerttrigger.complex';
import { UserSecurityState } from './usersecuritystate.complex';
import { SecurityVendorInformation } from './securityvendorinformation.complex';
import { VulnerabilityState } from './vulnerabilitystate.complex';
//#endregion

export interface Alert extends Entity {
  //#region ODataApiGen Properties
  activityGroupName?: string;
  assignedTo?: string;
  azureSubscriptionId?: string;
  azureTenantId: string;
  category?: string;
  closedDateTime?: Date;
  cloudAppStates?: CloudAppSecurityState[];
  comments?: string[];
  confidence?: number;
  createdDateTime?: Date;
  description?: string;
  detectionIds?: string[];
  eventDateTime?: Date;
  feedback?: AlertFeedback;
  fileStates?: FileSecurityState[];
  historyStates?: AlertHistoryState[];
  hostStates?: HostSecurityState[];
  incidentIds?: string[];
  lastModifiedDateTime?: Date;
  malwareStates?: MalwareState[];
  networkConnections?: NetworkConnection[];
  processes?: Process[];
  recommendedActions?: string[];
  registryKeyStates?: RegistryKeyState[];
  securityResources?: SecurityResource[];
  severity: AlertSeverity;
  sourceMaterials?: string[];
  status: AlertStatus;
  tags?: string[];
  title?: string;
  triggers?: AlertTrigger[];
  userStates?: UserSecurityState[];
  vendorInformation?: SecurityVendorInformation;
  vulnerabilityStates?: VulnerabilityState[];
  //#endregion
}